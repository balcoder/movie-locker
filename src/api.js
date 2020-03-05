import { KEY } from './movie-locker.config';
const APIURL = 'https://api.themoviedb.org/3/';
const GENREURL = `${APIURL}genre/movie/list?api_key=${KEY}&language=en-US&include_adult=false&page=1`
const POPULARURL = `${APIURL}discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

//hand the response from our async fetch to handleError
function handleError(res) {
  if(!res.ok) {
    // if between 400 and 499 client side problem 400:Bad Request 401 (Unauthorized) 403 (Forbidden)
    if(res.status >= 400 && res.status < 500) {
      return res.json().then(data => {
        let err = { errorMessage: data.message };
        throw err;
      })
    } else {
      // 500 (Internal Server Error) 501 (Not Implemented)
      let err = { errorMessage: 'Please try later: Server problem' }
    }
  }  
  return res.json();
}


export async function getGenres() {
  return fetch(GENREURL)
    .then(res => handleError(res))
}

export async function getPopular() {
  return fetch(POPULARURL)
    .then(res => handleError(res))
}