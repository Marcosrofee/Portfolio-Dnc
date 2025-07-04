 import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

 // import pages
 import Home from './pages/Home'
 import Technologies from './pages/Technologies/Technologies'
import About from './pages/About/About'





 function App() {


   return (

     <Router>
       <Routes>
         <Route path="/Home" element={<Home/>}  />
         <Route path="/technologies" element={<Technologies/>} /> 
         <Route path="/About" element={<About/>} />
       </Routes>  
     </Router>  
   )
}

export default App