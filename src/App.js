import Row from './components/Row';
import './App.css';
import React from 'react';
import requests from './requests';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
 
    return ( <div className = "App" >
            <Navbar />
            <Banner name="name"  description="description"/>
            <Row  title="Netflix Originals"  fetchUrl={requests.fetchNetflixOriginals}  isLargeRow={true}/>
             <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
             <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
             <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
             <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
             <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
             <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>                                     
        </div>
    );
}

export default App;