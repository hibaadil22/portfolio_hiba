import React, { useState, useEffect } from 'react';
import '../styles/styleabout.css';

const About = () => {
  const [loopNum, setLoopNum] = useState(0);     
  const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ["Dévellepeuse web Full Stack"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

    const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section  id='about' className='s1'>
      <div className="row">
        <div className="col-8">
          <div className='v'>
          <h4 ><span>B</span>ienvenue <span>S</span>ur <span> M</span>on<span> P</span>ortfolio</h4>
          <h1 className=" fw-bold text-light">Hiba ADIL <span>{text}</span></h1>
          <p className=" fw-bold text-light para">
          <span style={{color:'blueviolet'}}>"</span>Bienvenue sur notre site ! Nous sommes ravis de vous avoir ici<br/> Explorez nos services et découvrez comment nous pouvons vous aider à réaliser vos projets.<span style={{color:'blueviolet'}}>"</span> 
          </p>
          </div>
        </div>
        <div className="col-4 imaage">
          <img className='imgabout' src='mesimages/kkll.webp' alt="Hiba ADIL" style={{width:"300px",height:"300px"}} />
         
        </div>
      </div>
     

      <div className="rowbtn">
      <button  className='btn'><a href='#'>Télecharger moon CV</a></button>
      <div className='col-3 f'><button  className='btn btninfo'><a href='#contact'>Connectez-moi</a></button>
      
      </div>
      </div>
    </section>
  );
};

export default About;
