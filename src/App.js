import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './requests';
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
