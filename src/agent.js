import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { request } from 'http';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => res.body;



const requests = {
  get: url =>
  superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  post: (url,body) => 
  superagent.post(`${API_ROOT}${url}`,body).use(tokenPlugin).then(responseBody),
};

const Articles = {
  all: page =>
    requests.get(`/articles`),
};

const Auth = {
  login: (email,password) => 
    requests.post(`/users/login`,{user: {email,password}}),
  current: () => 
    requests.get('/user')
};

let token= null
let tokenPlugin = req => {
  if(token) req.set('authorization',`Token ${token}`);
}

const setToken = _token => {this.token = _token}

export default {
  Articles,
  Auth,
  setToken
};
