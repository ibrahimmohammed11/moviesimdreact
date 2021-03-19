import axios from "axios";

export default async function getTrending(mediaType) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
    return data
}
