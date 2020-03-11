import React from "react";
import { connect } from "react-redux";
import BookOverviewComponent from "../../components/BookOverview/BookOverview";
import {Button} from "@material-ui/core";
import axios from "../../config/axios-orders";

class BookOverview extends React.Component {
    rentBook = (bookId) => {
        axios.post("/api/books/" + bookId + "/rent", null, { headers: { "X-AUTH-TOKEN": this.props.token }})
            .then(response => {
                this.props.getBooks();
            })
            .catch(error => {
                if(error.request.status === 401) alert(JSON.parse(error.request.responseText).message);
            })
    };

    returnBook = (bookId) => {
        axios.post("/api/books/" + bookId + "/return", null, { headers: { "X-AUTH-TOKEN": this.props.token }})
            .then(response => {
                this.props.getBooks();
            })
            .catch(error => {
                alert(error.message);
                console.log(error);
            })
    };

    render(){
        const { bookDetails } = this.props;
        const greyWrapper = bookDetails.isBorrowed ? "bookWrapper" : null;

        let titleColor = null,
            rentOrReturn = () => this.rentBook(bookDetails.id),
            buttonContent = "RESERVER";

        if(bookDetails.isBorrowed){
            titleColor = "red";
            rentOrReturn = null;
            buttonContent = "INDISPONIBLE";

            if(bookDetails.borrowerId === this.props.userId){
                titleColor = "green";
                rentOrReturn = () => this.returnBook(bookDetails.id);
                buttonContent = "RENDRE";
            }
        }

        const actionButton = (
            <Button size="small" color="primary" onClick={rentOrReturn}>
                {buttonContent}
            </Button>
        );

        return (
            <BookOverviewComponent classes={this.props.classes}
                                   bookId={bookDetails.id}
                                   imageURL={bookDetails.imageURL}
                                   title={bookDetails.title}
                                   description={bookDetails.description}
                                   titleColor={titleColor}
                                   className={greyWrapper}
                                   actionButton={actionButton}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
    };
};

export default  connect(mapStateToProps)(BookOverview);