import React from 'react';
import '../styles/styleServices.css'; 

function Services () {
    const services = [
        {
            id: 1,
            title: 'Développement Front-End',
            description: 'Utilisation de technologies comme HTML, CSS, JavaScript et des frameworks (React) pour créer des interfaces utilisateur interactives et responsives',
            icon: 'bi bi-code-slash', 
        },
        {
            id: 2,
            title: 'maintenace et services',
            description: ' Gestion des mises à jour, des bugs et des performances des sites ou applications existants..',
            icon: 'bi bi-phone', 
        },
        {
            id: 3,
            title: 'Développement Back-End',
            description: 'Création de l’architecture serveur, gestion des bases de données (MySQL) et programmations avec PHP ',
            icon: 'bi bi-database', 
        },
    ];

    return (
        <section className="services" id='services'>
           <div className="row cnt">
                  <h3 >Mes services</h3>
            </div><br/>
            <div className="services-container">
                {services.map(service => (
                    <div className="service-card" key={service.id}>
                        <i className={service.icon} style={{ fontSize: '50px', color: 'blueviolet' }}></i>
                        <h3  >{service.title}</h3>
                        <p style={{fontSize:'10px'}}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
