import "./Cards.css"

import Button from "../Button/Button";

//Assets
import ccxp from "../../assets/ccxp.png"
import Test from "../../assets/Test.svg"
import DevsClub from "../../assets/DevsClub.png"
import Portfolio from "../../assets/Portfolio.png"
import ByeCar from "../../assets/ByeCar.png"

function Cards(){
     return(
         <section>
             <div className="card">
                 <div className="cards">
                     <img src={ccxp} width={400} alt="" srcset="" />
                         <h3>Projeto 1</h3>
                     <p>Projeto desenvolvido com Html, css e Javascript com Parceria com Dnc ... </p>
                  <a href="https://ccxp-25.vercel.app/"><Button/></a>
              </div>
                <div className="cards">
                     <img src={DevsClub} width={400} alt="" srcset="" />
                         <h3>Projeto 2</h3>
                     <p>Projeto desenvolvido com Html, css e Javascript com Parceria com DevsClub ... </p>
                  <a href="https://devs-club-st.vercel.app/"><Button/></a>
              </div>
             </div>
             <div className="card mg-top">
                 <div className="cards">
                     <img src={Portfolio} width={400} alt="" srcset="" />
                         <h3>Projeto 3</h3>
                     <p>Projeto desenvolvido com Html, css e Javascript como profil
                        proficional  ... </p>
                  <a href="https://my-portfilo-pro.vercel.app/"><Button/></a>
              </div>
                <div className="cards">
                     <img src={ByeCar} width={400} alt="" srcset="" />
                         <h3>Projeto 1</h3>
                     <p>Projeto desenvolvido com Html, css e Javascript com Parceria com Dnc ... </p>
                  <a href="https://landing-page-bye-car.vercel.app/"><Button/></a>
              </div>
            </div>
         </section>
     )
}
export default Cards;