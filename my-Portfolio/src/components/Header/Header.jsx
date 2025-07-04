import Button from "../Button/Button";
import "./Header.css"
 import { useState, useEffect } from 'react';

 function Header() {
    const [text, settext] = useState('');
    const toRotate = [' Me chamo Marcos', ' Sou Desenvolvedor Full Stack!', ' Sou Desenvolvedor web!'];
    const [loop, setloop] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const period = 90;
    const [delta, setdelta] = useState(130);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
        }, [text]);

        const toType = () => {
        let i = loop % toRotate.length; // isso limita meu i a um valor entre 0 e 2 no máximo
        let fullText = toRotate[i];  
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        settext(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setisDeleting(true);
            setdelta(period)
        } else if (isDeleting && updatedText === ' ') {
            setisDeleting(false);
            setdelta(period);
            setloop(loop + 1);
        } else if (isDeleting && updatedText !== ' ') {
            setdelta(70);
        }
    }
    


     return (
         <header >
             <h1>{text}</h1>
                 <p>Sou um apaixonado por tecnologia e soluções inovadoras.Como <br />
                     Product Manager, eu tenho o compromisso de resolver <br />
                         problemas complexos e trazer resultados excepcionais para os <br />
                             negócios e para os projetos . <br />
                                  Sempre em busco de novos desafios para superar.</p>

            <a href="http://localhost:5173/About">
                <Button buttonStyle="primary" >
                  Saiba mais 
                </Button>
            </a> 
                                    
         </header>
  );
}
    
  


export default Header;