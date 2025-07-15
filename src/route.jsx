import Home from "./Home";
import Favoris from "./Favoris";
import NewFilm from "./NewFilm";
import NavBar from "./NavBar";
import { Component } from "react";
import NotFound from "./NotFound";
import App from "./App";

const route=[
    {
        path:"/",
        Component: App,
        children:[
            {path:"", Component:Home},
            {path:"/Favoris", Component:Favoris},
            {path:"/NewFilm", Component:NewFilm},
            {path:"*", Component:NotFound},
        ],
    }

];

export default route;
