import {API_KEY} from './config'


const API_HOME = `http://ws.audioscrobbler.com/2.0`

export function getArtists(country='mexico') {
  const URL = `${API_HOME}/?method=geo.gettopartists&country=${country}&api_key=${API_KEY}&format=json`
  return fetch(URL, {
    method: 'GET'
  })
  .then(request => request.json())
  .then(json=> json.topartists.artist)
}