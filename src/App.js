import React from 'react';
import "./App.css";
import logo from "./ressources/logo_petit.png";
import { leftPanelButtons, rightPanelButtons } from "./config/webapp_config";

import Header from "./containers/Header/Header";
import NavBar from "./containers/NavBar/NavBar";
import PageRouting from "./containers/PageRouting/PageRouting";
import Footer from "./containers/Footer/Footer";

import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header header_logo={logo}
                        header_logo_alt={"logo_trou_perdu_en_isere"}
                        title={"Trou-perdu-en-Isère"}/>
                <NavBar leftPanelButtons={leftPanelButtons}
                        rightPanelButtons={rightPanelButtons}/>
                <div className={"app_content"}>
                    <PageRouting/>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;
