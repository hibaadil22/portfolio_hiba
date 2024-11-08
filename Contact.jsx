
import React from 'react';
import '../styles/styleContact.css';
function Contact () {
    return (
        <div>
            <section id="contact" className="contact-section">
                <div className='conteneur' >
                <div className="container srcc">
                    <div className="row">
                        <div className="col-4 div1">
                            <br /><br /><br />
                            <ul className="social-list">
                                <h2>Suivez-moi</h2>
                                <li>
                                    <a href="mailto:hibaadil119@mail.com" className="social-link">
                                        <i className="bi bi-envelope"></i><strong>hibaadil119</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+2120710518330" className="social-link">
                                        <i className="bi bi-telephone"></i><strong>07 10 51 83 30</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="bi bi-linkedin"></i><strong>hibaadil9</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="bi bi-twitter"></i><strong>hibaadil9</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="bi bi-instagram"></i><strong>hibaadil9</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 div2">
                            <h2 className='titre2'>Contactez-moi</h2>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="nom" className="form-label">Nom</label>
                                    <input type="text" className="form-control" id="nom" placeholder="Nom" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="prenom" className="form-label">Prénom</label>
                                    <input type="text" className="form-control" id="prenom" placeholder="Prénom" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone" className="form-label">Téléphone</label>
                                    <input type="tel" className="form-control" id="telephone" placeholder="Téléphone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" placeholder="Votre message" rows="4"></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="submit-btn">Soumettre</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
