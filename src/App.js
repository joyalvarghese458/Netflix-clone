import './App.css';
import requests from './requests'
import Row from './components/Row';
import Banner from './components/Banner';
import  Nav  from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
       
      <Row isPoster={true} title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated Movies' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentries' fetchUrl={requests.fetchDocumentaries}/>
                

    </div>
  );
}

export default App;
