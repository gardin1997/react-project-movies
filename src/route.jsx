import Home from "./pages/Home";
import Favoris from "./pages/Favoris";
import NewFilm from "./pages/NewFilm";
import NotFound from "./pages/NotFound";
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
