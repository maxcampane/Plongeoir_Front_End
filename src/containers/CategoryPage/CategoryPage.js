import React from "react";
import { fake_books } from "../../config/fake_books_config";
import CategoryPageComponent from "../../components/CategoryPage/CategoryPage";
import BookOverview from "../../components/BookOverview/BookOverview";
import { withStyles } from "@material-ui/core";

let test = "warning";

const styles = theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
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
        this.setState({
            books: fake_books,
            filteredBooks: fake_books,
        });
    }

    render() {
        const { classes, match: {params} } = this.props;

        let booksOverview,
            isInputInvalid = false;
        if(this.state.filteredBooks.length === 0) {
            isInputInvalid = true;
            booksOverview = <p>Il n'y a pas de livres qui correspond à votre recherche.</p>
        } else {
            booksOverview = this.state.filteredBooks.map((book, index) => (
                <BookOverview key={book._id}
                              classes={classes}
                              title={book.title}
                              description={book.description}/>
            ));
        }
        
        return <CategoryPageComponent classes={classes} isInputInvalid={isInputInvalid}
                                      categoryId={params.id}
                                      onFilterChange={this.onFilterChange}
                                      booksOverview={booksOverview}/>;
    }
}

export default withStyles(styles)(CategoryPage);