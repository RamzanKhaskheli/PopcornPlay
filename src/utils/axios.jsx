import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzA1NTA5NGI4YjRjZTAzNzY4MmVjOGYyZTUyMThkYyIsIm5iZiI6MTc1ODcwODAwNS4zMzcsInN1YiI6IjY4ZDNjMTI1NTE5OGQwOTZiMjQ5ZjRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ghVIeFw2wOh2lIlzqE-zTyJuwcxcbt1eThzsWMrK38'
  }
})

export default instance;