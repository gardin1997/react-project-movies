 import { useState } from 'react';
function NewFilm(){
    const categories=["animation","science-fiction","drame","action","biopic","aventure","comédie","thriller","fantastique","drame romantique","romance","mystère","guerre"];
    const film={
    titre: '',
    realisateur: '',
    annee: '',
    categorie: '',
    affiche: '',
    description: ''
  };
  
  const [formData, setFormData] = useState(film);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi vers un backend ou console log pour test
    fetch('http://localhost:4000/films/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        annee: parseInt(formData.annee),
        favoris: false
      })
    })
      .then(res => res.ok ? alert('Film ajouté !') : alert('Erreur lors de l’enregistrement'))
      .catch(err => console.error('Erreur:', err));
      setFormData(film);
  };

  return (
    <div className='addfilm'>
      <h2>Ajouter un film</h2>
      <form onSubmit={handleSubmit}>
        <label for="titre">Titre</label>
        <input type="text" name="titre" value={formData.titre} onChange={handleChange} required />
        <label for="realisateur">Réalisateur</label>
        <input type="text" name="realisateur" value={formData.realisateur} onChange={handleChange} required />
        <label>Année</label>
        <input type="number" name="annee" value={formData.annee} onChange={handleChange} required />
        <label>Catégorie</label>
        <select name="categorie" value={formData.categorie} onChange={handleChange} required>
            {categories.map(categorie=> <option value={categorie}>{categorie}</option>)}
        </select>
        <label>URL de l’affiche</label>
        <input type="text" name="affiche" value={formData.affiche} onChange={handleChange} required/>
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} rows={4} required/>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );


}

export default NewFilm;