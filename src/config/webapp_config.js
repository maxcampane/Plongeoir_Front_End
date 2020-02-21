import * as routes_names from "./routes_names";

/*
 * Contenu du site
 */

export const content_config = {
    name: "Trou-perdu-en-Isère",
    address: "Trou-perdu-en-Isère\n 38350 Isère",
    number: "01.23.45.67.89",
    hours: [
        {
            day: "Lundi",
            time: "09h30 - 17h30"
        },
        {
            day: "Mardi",
            time: "08h30 - 17h30"
        },
        {
            day: "Mercredi",
            time: "08h30 - 15h30"
        },
        {
            day: "Jeudi",
            time: "09h30 - 15h30"
        },
        {
            day: "Vendredi",
            time: "08h30 - 17h30"
        },
    ]
};

/*
 * Configuration du css
 */

export const css_config = {
    font_color: "orange",
};

/*
 * Ensemble de boutons de la barre de navigation
 */

export const leftPanelButtons = [
    {
        name: "Accueil",
        url: routes_names.HOME,
    },
    {
        name: "Bibliothèque",
        url: routes_names.LIBRARY,
    },
];

export const rightPanelButtons = [
    {
        name: "Sign In",
        url: routes_names.SIGNIN,
    },
    {
        name: "Sign Up",
        url: routes_names.SIGNUP,
    },
];
