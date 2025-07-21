import { useState,useEffect } from "react";
import ListFilms from "../components/ListFilms";
import CardFilm from "../components/CardFilm";

function Favoris(){
    const [films,setFilms]=useState([]);
    const loadData=()=>{
        fetch("https://json-backend-movies.onrender.com/films")
            .then(reponse=>reponse.json())
            .then(data=>{
                const selectData=data.filter((element)=>element.favoris===true);
                setFilms(selectData);
            })
            .catch(err => console.error(err));
    };
    useEffect(()=>loadData(),[]);


    return(
        <>
            <h2>Mes films favoris</h2>
            {films.length===0? <h2>Aucun favoris</h2>:<ListFilms films={films}  renderFilm={(film) => <CardFilm film={film} reload={loadData}/>}/>}
        </>
    );
}

export default Favoris;