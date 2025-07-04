import "./Technologies.css";

//Pages
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

//Assets
import Slash from "../../assets/Code-slash.svg";
import Palette from "../../assets/Code-Palette.svg";
import Picil from "../../assets/Code-Pincil.svg";
import Camera from "../../assets/Code-Camera.svg";
import Video from "../../assets/Code-Video.svg";
import Seo from "../../assets/Code-SEO.svg";
import Web from "../../assets/Code-Web.svg";

function Technologies() {
  return (
     <section>
          <NavBar/> 
          <div >
             
              <h2><span>My</span> Tecnologias</h2>
            <div className="tecn-container">
               <div class="services-box">
                 <div class="icon">
                     <img src={Slash} alt="" srcset="" />
                 </div>
                 <div>
                    <h5>Desenvolvimento Web</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut ab incidunt doloribus veniam accusamus minima esse..</p>
                 </div>
               </div>
               
                <div class="services-box">
                 <div class="icon">
                     <img src={Palette} alt="" srcset="" />
                 </div>
                 <div>
                    <h5>UI/UX</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut ab incidunt doloribus veniam accusamus minima esse..</p>
                 </div>
               </div>
                
                 <div class="services-box">
                 <div class="icon">
                     <img src={Picil} alt="" srcset="" />
                 </div>
                 <div>
                    <h5>Graphic Design</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut ab incidunt doloribus veniam accusamus minima esse..</p>
                 </div>
               </div>
                
                 <div class="services-box">
                 <div class="icon">
                     <img src={Camera} alt="" srcset="" />
                 </div>
                 <div>
                    <h5>Photography</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut ab incidunt doloribus veniam accusamus minima esse..</p>
                 </div>
               </div>
            </div> 

             <div className="tecn-containe mg-top">
                   <div class="services-box">
                 <div class="icon">
                     <img src={Video} alt="" srcset="" />
                 </div>
                 <div>
                    <h5>Video Editing</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut ab incidunt doloribus veniam accusamus minima esse..</p>
                 </div>
               </div>
                 <div class="services-box">
                 <div class="icon">
                     <img src={Seo} alt="" srcset="" />
                 </div>
                 <div>
                    <h5>SEO</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut ab incidunt doloribus veniam accusamus minima esse..</p>
                 </div>
               </div>
                 <div class="services-box">
                 <div class="icon">
                     <img src={Web} alt="" srcset="" />
                 </div>
                 <div>
                    <h5> Webhook</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut ab incidunt doloribus veniam accusamus minima esse..</p>
                 </div>
               </div>
             </div>

             <Footer />

              
          </div>
     </section>
  );
}
export default Technologies;