import React from "react";
import * as routes_names from "../../config/routes_names";
import * as actions_books from "../../store/actions/actions_books";

import BookPageComponent from "../../components/BookPage/BookPage";

import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import axios from "../../config/axios-orders";

const styles = theme => ({
    container: {
        height: "100%",
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
});

class BookPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        }
    }

    componentDidMount() {
        if(this.props.token){
            this.props.fetchBook(this.props.match.params.id, this.props.token);
        }
    }

    rentBook = (bookId) => {
        console.log(1);
        axios.post("/api/books/" + bookId + "/rent", null, { headers: { "X-AUTH-TOKEN": this.props.token }})
            .then(response => {
                this.setState({ redirect: true });
            })
            .catch(error => {
                console.log(error);
            })
    };

    returnBook = (bookId) => {
        console.log(1);
        axios.post("/api/books/" + bookId + "/return", null, { headers: { "X-AUTH-TOKEN": this.props.token }})
            .then(response => {
                this.setState({ redirect: true });
            })
            .catch(error => {
                console.log(error);
            })
    };

    nothing = () => {

    };

    render(){
        let book = this.props.book,
            bookPageContent = null;

        if(this.state.redirect){
            return <Redirect to={routes_names.CATEGORIE + "/" + book.categoryId}/>;
        }

        if(!this.props.token){
            return <Redirect to={routes_names.HOME}/>
        }

        if(book){
            let greyWrapper = null,
                titleColor = null,
                actionButtonContent = "RESERVER",
                rentOrReturn = this.rentBook;

            if(book.borrowed){
                greyWrapper = "bookWrapper";
                titleColor = "red";
                actionButtonContent = "INDISPONIBLE";
                rentOrReturn = this.nothing;

                if(book.borrowerId === this.props.userId){
                    titleColor = "green";
                    actionButtonContent = "RENDRE";
                    rentOrReturn = this.returnBook;
                }
            }

            bookPageContent = <BookPageComponent classes={this.props.classes}
                                                 greyWrapper={greyWrapper}
                                                 titleColor={titleColor}
                                                 book={book}
                                                 rentOrReturn={rentOrReturn}
                                                 actionButtonContent={actionButtonContent}/>;
        }


        return bookPageContent;
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        book: state.books.book
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBook: (bookId, token) => dispatch(actions_books.fetchBook(bookId, token))
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BookPage));