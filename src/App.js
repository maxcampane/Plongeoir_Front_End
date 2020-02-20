import React from 'react';
import Header from "./containers/Header/Header";
import NavBar from "./containers/NavBar/NavBar";
import logo from "./ressources/logo_petit.png";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function App() {
    const leftPanelButtons = [
        {
            name: "Accueil",
            url: "/",
        },
        {
            name: "Bibliothèque",
            url: "/bibliotheque",
        },
    ];

    const rightPanelButtons = [
        {
            name: "Sign In",
            url: "/sign-in",
        },
        {
            name: "Sign Up",
            url: "/sign-up",
        },
    ];

    return (
        <>
            <Header header_logo={logo}
                    header_logo_alt={"logo_trou_perdu_en_isere"}
                    title={"Trou-perdu-en-Isère"}/>
            <NavBar leftPanelButtons={leftPanelButtons}
                    rightPanelButtons={rightPanelButtons}/>
            <div style={{flexGrow: 1}}>
                <p>slt</p>
            </div>
            <BottomNavigation>
                <BottomNavigationAction label="Nearby" icon={<FacebookIcon />}/>
                <BottomNavigationAction label="Nearby" icon={<TwitterIcon />}/>
                <BottomNavigationAction label="Nearby" icon={<GitHubIcon />}/>
            </BottomNavigation>
        </>
    );
}

export default App;
