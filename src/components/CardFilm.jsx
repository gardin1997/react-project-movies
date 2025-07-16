import { useState } from "react";
import { useLocation } from "react-router-dom";
function CardFilm({film,reload=()=>{}}){
    const location=useLocation();
    const [isFavoris, setIsFavoris]=useState(film.favoris);
    const [voirDescription,setVoirDescription]=useState(false);
    function handleClickFavoris(){
        fetch("http://localhost:4000/films/"+film.id, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                            favoris: !isFavoris
                         })
                })
                .then(res => {
                    if(res.ok){
                        setIsFavoris(!isFavoris);
                        if(location.pathname==="/Favoris"){reload();}
                    };
                })
                .catch(err => console.error(err));

    }

    function handleClickDescription(){
        setVoirDescription(!voirDescription);
    }
    return(
        <div className="card">
            <img className="image" src={film.affiche} alt={film.titre}/>
            <h2>{film.titre}</h2>
            <h3>{film.realisateur} ({film.annee})</h3>
            {voirDescription?<p>{film.description}</p>:null}
            <div className="boutton">
                <button className="like-btn" onClick={handleClickFavoris}>{isFavoris?"❤":"🤍"}</button>
                <button className="btnDescription" onClick={handleClickDescription}>{voirDescription?"Masquer la fiche":"Voir la fiche"}</button>
            </div>
            
        </div>
    );
}

export default CardFilm;