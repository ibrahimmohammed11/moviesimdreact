import axios from "axios";

export default async function searchApi(searchText) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&query=${searchText}&page=1&include_adult=false`)
    return data
}


