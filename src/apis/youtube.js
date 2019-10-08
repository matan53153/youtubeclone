import axios from "axios"

const KEY = 'AIzaSyADRt4H8sgMRaZt9JsgxE50uKBCo6FrqZ4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})


