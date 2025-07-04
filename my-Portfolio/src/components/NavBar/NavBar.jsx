import './NavBar.css';

//ASSETS//
import Git from '../../assets/Git.svg';
import Lin from '../../assets/Linkedin.svg';


function NavBar() {
     return(
         <nav>
             <ul>
                 <li><a href="Home">Projects</a></li>
                 <li><a href="Technologies">Tecnologias</a></li>
                 <li><a href="About">Sobre min</a></li>   
             </ul>
                 <div className='img'>
                     <a href="https://github.com/Marcosrofee">  <img src={Git} alt="GitHub " /></a>
                     <a href="https://www.linkedin.com/in/marcos-rogerio-b34b4b219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZhBbM1cnRUulzvWH7GHWzQ%3D%3D"> <img src={Lin} alt="Linkedin" />   </a> 
                 </div>
             

         </nav>
     )
}
export default NavBar;