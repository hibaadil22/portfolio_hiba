import React from 'react';
import '../styles/styleProjects.css';
import Site from './site.jsx';
import { useState } from 'react';

function Projects (){
            let typesdessites=['site web dynamique','site web statique', 'formulaire'];
             let sites = [
                { img: 'pr1.jpg', des: 'site web statique' },
                { img: 'pj2.jpg', des: 'site web dynamique' },
                { img: 'pj3.jpg', des: 'site web dynamique' },
           
                { img: 'pj5.jpg', des: 'site web dynamique' },
                { img: 'pj6.jpg', des: 'site web statique' },
                { img: 'pj8.jpg', des: 'formulaire' },
                { img: 'pj9.jpg', des: 'site web statique' },
               
              ];
            const [selectedCategory, setSelectedCategory] = useState(typesdessites[0]);
            const filtersite = sites.filter((s) => s.des === selectedCategory);
             
            return (
              <div className="conteneure">
               
          
            
                 <div className="categories">
                           {typesdessites.map((category,i) => (
                               <button key={i} onClick={() => setSelectedCategory(category)} >
                                   {category}
                               </button>
                           ))}
                       </div>
          
          
          
                       <div className='bb' >
                       {filtersite.map((st,i) => (
                               <Site key={i} listes={st} />
                           ))}
                       </div>
              </div>
          
            
            );
          }
          
        

export default Projects;
