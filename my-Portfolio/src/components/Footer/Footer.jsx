import "./Footer.css";

//Assets

import Figma from "../../assets/Figma.svg"
import Git from "../../assets/Git.svg"
import LinkedIn from "../../assets/LinkedIn.svg";

function Footer() {
     return(
        <footer>
           <div>
               <p>Meu contato</p>
               <span>(14) 99756-1971</span>
           </div>
           <div>
               <p>Meu e-mail</p>
               <span>marcroger61@gmail.com</span>
           </div>
           <div className="footer-social">
               <a href="https://www.linkedin.com/in/seu-perfil/"  target="_blank" rel="noopener noreferrer">
                   <img src={LinkedIn} width={30} alt="LinkedIn" />
               </a>
               <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer">
                   <img src={Git} width={30} alt="GitHub" />
               </a>
               <a href="https://figma.com/seu-perfil" target="_blank" rel="noopener noreferrer">
                   <img src={Figma} width={30} alt="Figma" />
               </a>
           </div>

        </footer>
     )
}
export default Footer;