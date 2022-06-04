import axios from 'axios'
const KEY = 'AIzaSyBmtmYVNdAEKWX04QdEUMJz_6szUoSe5sw'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
