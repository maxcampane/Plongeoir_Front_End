import React from "react";
import "./404.css";

const error404 = (props) => (
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h3>Oops ! La page que vous recherchez semble introuvable.</h3>
                <h1><span>4</span><span>0</span><span>4</span></h1>
            </div>
            <h2>La page que vous cherchez n'existe pas. Elle a été supprimée ou vous avez fourni une adresse incorrecte.<br/>
                S'il vous plaît, vérifiez l'adresse renseignée et réessayez.</h2>
        </div>
    </div>
);

export default error404;