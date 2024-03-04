import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/Scrolltotop";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Subcontent from "./components/Subcontent";
import About from "./components/About";
import Brands from "./components/Brands";
import Client from "./components/Client";
import Product from "./components/Product";
import Heat from "./Pages/heat-ventillation-system";
import Dairy from "./Pages/dairy";
import Food from "./Pages/food";
import Vrfsystem from "./Pages/vrfsystem";
import Coldstoragecabin from "./Pages/coldstoragecabin";
import Ductable from "./Pages/ductable";
import Turnkey from "./Pages/turnkey";
import Industrialrack from "./Pages/Industrial-rack";
import Blastchillers from "./Pages/blastchillers";
import Industrialchillers from "./Pages/industrialchillers";
import Ripeningchambers from "./Pages/ripeningchambers";
import Logisticcoldstorage from "./Pages/logisticcoldstorage";
import Icecreamstorage from "./Pages/icecreamstorage";
import Hvacservice from "./Pages/hvacservice";
import Pharmastorage from "./Pages/pharmastorage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>

        <Route path='/' element={<>
        <Slider />
        <Content />
        <Subcontent />
        <Footer />
        </>}/>

        <Route path='/about' element={<>
        <Slider />
        <About />
        <Brands />
        <Footer />
        </>} />

        <Route path='/client' element={<>
        <Client />
        <Footer />
        </>} />

        <Route path='/products' element={<>
        <Product />
        </>} />
      
        <Route path='/heat-ventillation-system' element={<>
        <Heat /> </>} />

        <Route path='/dairy-cold-storage' element={<>
        <Dairy /> </>} />

        <Route path='/food-processing-cold-room' element={<>
        <Food /> </>} />

        <Route path='/vrf-system-installation' element={<>
        <Vrfsystem /> </>} />

        <Route path='/cold-storage-cabin' element={<>
        <Coldstoragecabin /> </>} />

        <Route path='/ductable-air-conditioner' element={<>
        <Ductable /> </>} />

        <Route path='/cold-storage-turnkey-project-services' element={<>
        <Turnkey /> </>} />

        <Route path='/industrial-storage-rack' element={<>
        <Industrialrack /> </>} />

        <Route path='/blast-chillers' element={<>
        <Blastchillers /> </>} />

        <Route path='/industrial-chillers' element={<>
        <Industrialchillers /> </>} />

        <Route path='/ripening-chambers' element={<>
        <Ripeningchambers /> </>} />

        <Route path='/logistic-storage' element={<>
        <Logisticcoldstorage /> </>} />

        <Route path='/ice-storage' element={<>
        <Icecreamstorage /> </>} />

        <Route path='/hvac-duct-installation-service' element={<>
        <Hvacservice /> </>} />

        <Route path='/pharmaceutical-cold-storage-construction-service' element={<>
        <Pharmastorage /> </>} />

        <Route path='/contact' element={<>
        <Contact />
        </>} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;