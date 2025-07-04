import "./Abouts.css"



function Abouts() {
     return(
         <section className="abouts">
             <div className="abouts-title">
                <h1>Sobre mim</h1>
             </div>
             <div className="abouts-content">
                <p>2023</p>
                <p>2024</p>
                <p>2025</p>
              </div>    
              <div className="timelinet"> 
              </div>  
              <div className="direct-circle"> 
                 <button  className="ciercle btn-a"></button>
                 <button  className="ciercle btn-b"></button>  
                 <button className="ciercle btn-c" ></button>      
              </div>
                <div className="abouts-text">
                    <div className="description1 ">
                         <p > Em 2023, eu comecei a <br /> aprender sobre desenvolvimento <br /> web e me apaixonei pela área.</p>
                  </div>
                     <div>
                      <p className="description2"> Em 2024, eu me aprofundei <br /> em React e comecei a construir <br />  meus próprios projetos.</p>
                     </div>
                    <div>
                      <p className="description3"> Em 2025, eu quero me tornar <br /> um desenvolvedor full-stack <br /> e contribuir para projetos de código aberto.</p>
                    </div>
                     
                </div>     
         </section>
     )
}
export default Abouts;