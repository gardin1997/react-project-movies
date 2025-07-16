function Search({setRecherche}){
    return(
        <div className="search">
            <input onChange={(e)=> setRecherche(e.target.value)} type="texte" placeholder="  🔍   entrer un titre de film a rechercher"/>
        </div>
    );
}

export default Search;