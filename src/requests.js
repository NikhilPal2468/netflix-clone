const API_KEY = "198c52997ad30ff6548ff1047af92e5b";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals :`/discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default requests;