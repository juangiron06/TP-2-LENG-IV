import React, { useState, useEffect } from 'react';

const Inicio = () => {
const [peliculas, setPeliculas] = useState([]);

useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
    .then((respuesta) => respuesta.json())
    .then((datos) => setPeliculas(datos))
    .catch((error) => console.error(error));
  }, []); // Array vacío para que solo se ejecute una vez al cargar[cite: 18]

return (
    <div style={{ padding: '20px' }}>
    <h2>Catálogo de Películas</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {peliculas.slice(0, 4).map((pelicula) => (
        <div key={pelicula.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '250px' }}>
            <img src={pelicula.image} alt={pelicula.title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            <h3>{pelicula.title}</h3>
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Estreno:</strong> {pelicula.release_date}</p>
            <p><strong>Puntuación:</strong> {pelicula.rt_score}/100</p>
        </div>
        ))}
    </div>
    </div>
);
};

export default Inicio;