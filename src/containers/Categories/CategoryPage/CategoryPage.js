import React from "react";
import * as actions_books from "../../../store/actions/actions_books";
import * as routes_names from "../../../config/routes_names";

import Error404 from "../../../components/Error/404";
import CategoryPageComponent from "../../../components/CategoryPage/CategoryPage";
import BookOverview from "../../BookOverview/BookOverview";

import { FormLabel, TextField, Typography, withStyles } from "@material-ui/core";
import { connect } from "react-redux";

const styles = theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        width: "100%",
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // [theme.breakpoints.down('xs')]:{
        //     // color: 'red',
        //     flexDirection: 'row',
        // }
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    categoryPageTitle: {
        marginBottom: theme.spacing(4),
    },
    formGroup: {
        marginBottom: theme.spacing(4),
    },
    searchInput: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(2),
        width: 200,
    }
});

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: "",
            filteredBooks: [],
        }
    }

    componentDidMount() {
        this.props.fetchBooks(this.props.match.params.id, this.props.token);
    }

    getBooks = () => {
        this.props.fetchBooks(this.props.match.params.id, this.props.token);
    };

    render() {
        if(this.props.error){
            return <Error404/>;
        }

        const { classes, match: { params } } = this.props;

        let booksOverview,
            isInputInvalid = false;

        if(this.props.books.length === 0){
            isInputInvalid = true;
            booksOverview = <Typography style={{ marginTop: "3em" }}> Il n'y a pas de livres dans cette catégorie. </Typography>
        } else if(this.props.filteredBooks.length === 0) {
            isInputInvalid = true;
            booksOverview = <Typography style={{ marginTop: "3em" }}> Il n'y a pas de livres qui correspond à votre recherche. </Typography>
        } else {
            booksOverview = this.props.filteredBooks.map((book, index) => {
                return <BookOverview key={index} classes={classes} getBooks={this.getBooks}
                                     redirectURL={routes_names.CATEGORIE + "/" + this.props.match.params.id} bookDetails={book}/>;
            });
        }

        const label = <FormLabel>Entrez le nom d'un livre : </FormLabel>,
            textField = <TextField id="filled-search" type="search"
                                   className={classes.searchInput}
                                   error={isInputInvalid}
                                   onChange={event => this.props.filterBooks(this.props.books, event.target.value.toLowerCase())}/>;



        return <CategoryPageComponent classes={classes} isInputInvalid={isInputInvalid}
                                      label={label}
                                      textField={textField}
                                      categoryName={params.id}
                                      booksOverview={booksOverview}/>;
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.categories.loading,
        error: state.books.error,
        books: state.books.books,
        filteredBooks: state.books.filteredBooks,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (categoryName, token) => dispatch(actions_books.fetchBooks(categoryName, token)),
        filterBooks: (books, filterValue) => dispatch(actions_books.filterBooks(books, filterValue)),
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CategoryPage));