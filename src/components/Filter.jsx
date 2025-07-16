function Filter({setFiltre}){
    const filtre=["tout","animation","science-fiction","drame","action","biopic","aventure","comédie","thriller","fantastique","drame romantique","romance","mystère","guerre"];
    return(
        <div className="filtre">
            <ul>
                {
                    filtre.map((element)=><li  onClick={(e)=> setFiltre(e.target.textContent) } key={element}>{element}</li>)
                }
            </ul>
        </div>
    );
}


export default Filter;