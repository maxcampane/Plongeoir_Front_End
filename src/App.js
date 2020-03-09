import React from 'react';
import "./App.css";
import header_logo from "./ressources/logo_petit.png";
import { content_config } from "./config/webapp_config";
import reducer_categories from "./store/reducers/reducer_categories";
import reducer_books from "./store/reducers/reducer_books";
import reducer_authentication from "./store/reducers/reducer_authentication";
import reducer_account from "./store/reducers/reducer_account";

import NavBar from "./containers/NavBar/NavBar";
import PageRouting from "./containers/PageRouting/PageRouting";
import Footer from "./containers/Footer/Footer";

import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

class App extends React.Component {
    render() {
        const rootReducer = combineReducers({
            categories: reducer_categories,
            books: reducer_books,
            auth: reducer_authentication,
            acc: reducer_account,
        });

        const logger = store => {
            return next => {
                return action => {
                    return next(action);
                }
            }
        };

        const store = createStore(rootReducer, applyMiddleware(logger, thunk));

        return (
            <Provider store = {store}>
                <BrowserRouter>
                    <NavBar header_logo={header_logo}
                            name={content_config.name}/>
                    <div className={"app_content"}>
                        <PageRouting/>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
