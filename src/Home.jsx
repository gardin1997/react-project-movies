import ListFilms from "./ListFilms";
import Filter from "./Filter";
import Search from "./Search";
import { useState,useEffect } from "react";
import CardFilm from "./CardFilm";

function Home() {

    const [films,setFilms]=useState([]);
    const [filtre,setFiltre]=useState("tout")
    const [recherche,setRecherche]=useState("");
    let selectData;
    useEffect(()=>{
    fetch("http://localhost:4000/films/")
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
            <Filter setFiltre={(filtre)=>setFiltre(filtre)}/>
            <Search setRecherche={(valeur)=>setRecherche(valeur)}/>
            <ListFilms films={films}  renderFilm={(film) => <CardFilm film={film} />}/>
        </div>
    );
}

export default Home;
