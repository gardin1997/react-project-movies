import CardFilm from "./CardFilm";
function ListFilms({films,renderFilm}){
    
    return(
        <div className="liste">
            {
                films && films.map((film)=><div key={film.id}>{renderFilm(film)}</div>)
                
            }
        </div>
    );
}

export default ListFilms;