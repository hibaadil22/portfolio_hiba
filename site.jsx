
import React from 'react';


function Site(props) {
    return (
        <div className='card-container'>
        <div className="card">
            <img src={`mesimages/${props.listes.img}`} alt="Image de produit" className="card-image" />
            <h2 className="card-title">{props.listes.des}</h2>
        </div>
        </div>
    );
}

export default Site;
