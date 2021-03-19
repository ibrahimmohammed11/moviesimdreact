import axios from "axios";

export default async function getMovie(mediaTypee) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${mediaTypee}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`)
    return data
}
