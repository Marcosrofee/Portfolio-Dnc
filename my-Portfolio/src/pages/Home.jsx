import Abouts from "../components/Abouts/Abouts";
import Footer from "../components/Footer/Footer";

import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";


function Home() {
  return (
    <div id="Home">
       <NavBar/>
       <Header/>
       <div>
        <Projects/>
       </div>
       <Abouts/>
        <Footer/>
    </div>
  );
}

export default Home;  