import Row from './Row';
import './App.css';
import React from 'react';
import requests from './requests';

function App() {
    return ( <div className = "App" >
            <h1>Netflix Clone</h1>
             <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
             <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
             <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
             <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
             <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
             <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
             <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>                                     
        </div>
    );
}

export default App;