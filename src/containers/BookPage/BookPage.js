import React from "react";
import * as actions_books from "../../store/actions/actions_books";
import { withStyles } from "@material-ui/core";
import BookPageComponent from "../../components/BookPage/BookPage";
import { connect } from "react-redux";

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
            bookId: null,
        }
    }

    componentDidMount() {
        this.props.fetchBook(this.props.match.params.id);
    }

    render(){
        let book = this.props.book,
            bookPageContent = null;

        if(this.props.book){
            bookPageContent = <BookPageComponent classes={this.props.classes}
                                                 book={book}/>;
        }


        return bookPageContent;
    }
}

const mapStateToProps = state => {
    return {
        book: state.books.book
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBook: bookId => dispatch(actions_books.fetchBook(bookId))
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BookPage));