import React from "react";
import CategoryPageComponent from "../../components/CategoryPage/CategoryPage";
import BookOverview from "../../components/BookOverview/BookOverview";

import { Typography, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions_books from "../../store/actions/actions_books";

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
            books: [],
            filteredBooks: [],
        }
    }

    onFilterChange = (event) => {
        const value = event.target.value.toLowerCase();
        const filteredBooks = this.filterBooksArray(value);

        this.setState({
            filteredBooks: filteredBooks,
            filterValue: event.target.value
        });
    };

    filterBooksArray = (filterValue) => {
        return this.state.books.filter(book => book.title.toLowerCase().includes(filterValue));
    };

    componentDidMount() {
        this.props.fetchBooks(this.props.match.params.id);
    }

    render() {
        const { classes, match: { params } } = this.props;

        let booksOverview,
            isInputInvalid = false;

        if(this.props.filteredBooks.length === 0) {
            isInputInvalid = true;
            booksOverview = <Typography style={{ marginTop: "3em" }}> Il n'y a pas de livres qui correspond à votre recherche. </Typography>
        } else {
            booksOverview = this.props.filteredBooks.map((book, index) => (
                <BookOverview key={index}
                              classes={classes}
                              bookId={book.id}
                              title={book.title}
                              imageURL={book.imageURL}
                              description={book.description}/>
            ));
        }

        return <CategoryPageComponent classes={classes} isInputInvalid={isInputInvalid}
                                      categoryId={params.id}
                                      categoryName={"test"} //récupérer dans le store le nom de la catégorie
                                      onFilterChange={this.onFilterChange}
                                      booksOverview={booksOverview}/>;
    }
}

const mapStateToProps = state => {
    return {
        loading: state.categories.loading,
        error: state.categories.error,
        books: state.books.books,
        filteredBooks: state.books.filteredBooks,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (categoryId) => dispatch(actions_books.fetchBooks(categoryId)),
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CategoryPage));