import './App.css';
import BarBuscador from './components/Organism/BarBuscador/BarBuscador';
import CardsHome from './components/Organism/CardsHome/CardsHome';
import BlusaNegra from "./assets/damas/dama-blusa-negra.jpg";
import PantalonNegro from "./assets/caballeros/hombre-pantalon-negrao.jpg";
import Short from "./assets/shorts/short-hombre.jpeg";
import Camisa from "./assets/camisas/camisa-hombre.jpg";
import Playera from "./assets/playeras/playera-hombre.png";
import Footer from './components/Templates/Footer/Footer';
import Carrusel from './components/Organism/Carrusel/Carrusel';

function App() {
  return (
    <div className="App">
      <header className='header-home'>
        <BarBuscador />
      </header>

      <main className='main-home'>
        <section className="carousel-section">
          <Carrusel />
        </section>

        <section className="welcome-section">
          <h2 className="welcome-message">¡Bienvenidos a PCStore!</h2>
          <p className="welcome-subtitle">Descubre la mejor selección de moda para todas las ocasiones</p>
        </section>

        <section className="cards-section">
          <div className="cards-container-home">
            <CardsHome src={BlusaNegra} descripcion="Blusa negra elegante" precio="$300.00" />
            <CardsHome link="/catalago-pantalones" src={PantalonNegro} descripcion="Pantalón negro clásico" precio="$450.00" />
            <CardsHome link="/catalago-shorts" src={Short} descripcion="Short casual para hombre" precio="$250.00" />
            <CardsHome link="/catalogo-camisas" src={Camisa} descripcion="Camisa formal para hombre" precio="$400.00" />
            <CardsHome link="/catalago-playeras" src={Playera} descripcion="Playera deportiva" precio="$200.00" />
          </div>
        </section>

        <section className="description-section">
          <div className="parrafo-home">
            <p>
              <span className="option-title">Opción 1:</span> <br />
              Moderna y Elegante
              <br />
              Bienvenido a PCStore, donde encontrarás ropa moderna y elegante para todas las ocasiones. Nuestra colección ofrece piezas únicas y atemporales que realzarán tu estilo personal.
            </p>
            <p>
              <span className="option-title">Opción 2:</span> <br />
              Estilo Urbano y Juvenil
              <br />
              En PCStore, descubre lo último en moda urbana y juvenil. Ofrecemos ropa que captura la esencia del estilo moderno, diseñada para expresar tu autenticidad y individualidad.
            </p>
            <p>
              <span className="option-title">Opción 3:</span> <br />
              Consciente y Sostenible
              <br />
              PCStore se dedica a la moda sostenible. Ofrecemos prendas elegantes y respetuosas con el medio ambiente, ideales para quienes buscan un estilo consciente y responsable.
            </p>
            <p>
              <span className="option-title">Opción 4:</span> <br />
              Glamour y Exclusividad
              <br />
              Explora el glamour y la exclusividad en PCStore. Nuestra colección de lujo está diseñada para quienes desean destacar con prendas únicas y sofisticadas.
            </p>
            <p>
              <span className="option-title">Opción 5:</span> <br />
              Familiar y Accesible
              <br />
              Bienvenidos a PCStore, donde la moda accesible para toda la familia es nuestra prioridad. Encuentra estilos modernos y cómodos para todas las edades a precios asequibles.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
