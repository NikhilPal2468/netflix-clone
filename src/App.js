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
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomantic} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
