import React from 'react';
import { serviciosIT } from '../data/serviciosData';

const Servicios = () => {
return (
    <div style={{ padding: '20px' }}>
    <h2>Servicios IT</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {serviciosIT.map((servicio) => (
        <div key={servicio.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '300px' }}>
            <img src={servicio.imagen} alt={servicio.nombre} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px' }} />
            <h3>{servicio.nombre}</h3>
            <span style={{ backgroundColor: '#e2e8f0', padding: '3px 8px', borderRadius: '4px', fontSize: '14px' }}>{servicio.categoria}</span>
            <p>{servicio.descripcion}</p>
        </div>
        ))}
    </div>
    </div>
);
};

export default Servicios;