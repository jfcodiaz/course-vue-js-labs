import {API_KEY} from './config'

const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${API_KEY}&format=json`

export function getArtists() {
  return fetch(URL, {
    method: 'GET'
  })
  .then(request => request.json())
  .then(json=> json.topartists.artist)
}