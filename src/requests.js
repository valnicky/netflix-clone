const API_KEY = "feb0a933b10a99bd61842a37d63a0f90";

//https://api.themoviedb.org/3/discover/movie?api_key=feb0a933b10a99bd61842a37d63a0f90&with_genres=28&sort_by=popularity.desc
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc`, //
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc`,

    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc `,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc `,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc`
}



export default requests;