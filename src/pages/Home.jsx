import ListFilms from "../components/ListFilms";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { useState,useEffect } from "react";
import CardFilm from "../components/CardFilm";

function Home() {

    const [films,setFilms]=useState([]);
    const [filtre,setFiltre]=useState("tout")
    const [recherche,setRecherche]=useState("");
    let selectData;
    useEffect(()=>{
    fetch("https://json-backend-movies.onrender.com/films")
        .then(reponse=>reponse.json())
        .then(data=>{
            if(filtre==="tout" && recherche==="")
            {
                selectData=data;
            }else if(recherche!=="")
            {
                selectData=data.filter((element)=> element.titre.toLowerCase().includes(recherche.toLowerCase()) );
            }else {
                selectData=data.filter((element)=>element.categorie===filtre);
            }
            setFilms(selectData);
        })
        .catch(err => console.error(err));
    },[filtre,recherche]);
    return(
        <div>
            <Filter filter={filtre} setFiltre={(filtre)=>setFiltre(filtre)}/>
            <Search setRecherche={(valeur)=>setRecherche(valeur)}/>
            <ListFilms films={films}  renderFilm={(film) => <CardFilm film={film} />}/>
        </div>
    );
}

export default Home;
