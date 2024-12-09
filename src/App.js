import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Gallery from './Gallery';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home/>} />
           <Route path='about' element={<About />} />
           <Route path='services' element={<Services />} />
           <Route path='gallery' element={<Gallery />} />
           <Route path='contact' element={<Contact />} />
       </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
