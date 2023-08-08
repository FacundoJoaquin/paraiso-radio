import "./App.css";
import Locutor from "./components/Locutor/Locutor";
import Reproductor from "./components/Reproductor/Reproductor";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";


function App() {

  
  return (
    <div className="main">
      <div className="main-reproductor">
        <Locutor />
        <Reproductor />
      </div>
      <div className="main-footer">
        <Banner />
        <Footer />
      </div>
    </div>
  );
}

export default App;
