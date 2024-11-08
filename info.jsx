import React, { useEffect, useState } from 'react';
import '../styles/styleInfo.css';

function Info () {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true); 
        }, 300); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <section id="info" className="about text-center p-5">
            <div className='col-12 img-container ct1' style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(-20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
                <img src='mesimages/GG.jpg' alt="Hiba" className='immg'/>
            </div>
            <div className='col-12 cnt2'>
                <div className={`info-container ${isVisible ? 'animate' : ''}`}>
                    <h3 style={{color:'blueviolet'}}>Mes informations</h3>
                    <p>
                        Bonjour ! Je suis Hiba, enthousiaste à propos du développement web full stack. Je maîtrise le développement back-end avec Laravel et le front-end avec React.js et j'ai également assez d'expérience avec les langages PHP, JavaScript et C.

                        Actuellement stagiaire chez CMC Rabat-Salé-Kénitra, spécialisée, je m'investis dans la création de solutions numériques.

                        Mon objectif est de concevoir des solutions efficaces, accessibles et esthétiques qui améliorent l'interaction des utilisateurs avec le monde en ligne et rendent la vie plus simple. Je m'efforce de créer des expériences intuitives qui répondent aux besoins de chacun. En combinant technologie et créativité, je vise à transformer les idées en réalités tangibles. Mon engagement est de contribuer à un monde numérique plus fluide et convivial.
                    </p>
                    <div className='button-container'>
                        <button type="button"  className='btn'><a href='#contact'>Télécharger mon CV</a></button>
                        <button type="button"  className='btn'><a href='#contact'>Connectez-moi</a></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
