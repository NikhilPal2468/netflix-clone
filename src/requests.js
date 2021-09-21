const API_KEY = "198c52997ad30ff6548ff1047af92e5b";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchHorror: `/discover/tv?api_key=${API_KEY}&with_networks=232`,
    fetchComedy: `/discover/tv?api_key=${API_KEY}&with_networks=155`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAction: `/discover/tv?api_key=${API_KEY}&with_networks=455`,
    fetchRomantic: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_networks=124`,
}

export default requests;