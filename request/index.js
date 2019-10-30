import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

function $request(url, type, params){
  return new Promise((resolve, reject)=>{

  })
}

export default
