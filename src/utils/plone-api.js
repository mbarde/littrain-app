/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import axios from 'axios'
import { getToken, setToken } from './auth'

const SESS_PREFIX_CACHED = 'cached_'
const BASE_URL = 'http://localhost:5080/Plone'

export { getContent, login }

function pathToURL (path) {
  var url = ''
  if (path.indexOf(BASE_URL) === 0) {
    url = path
  } else {
    url = `${BASE_URL}` + path
  }
  return url;
}

function login (username, password) {
  const url = `${BASE_URL}` + '/@login'
  return axios.post(url,
									{'login': username, 'password': password},
									{ headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}}
        ).then(
          (response) => { setToken(response.data.token); return 200 },
          (error) => error.response.status
        )
}


function getContent (path, allowCaching = false) {
  var url = pathToURL(path)
  if (allowCaching) {
    var cached = sessionStorage.getItem(`${SESS_PREFIX_CACHED}${url}`)
    if (cached) {
      try {
        var cachedObject = JSON.parse(cached)
        return new Promise((resolve) => {
          resolve(cachedObject)
        })
      } catch (e) {
        sessionStorage.removeItem(`${SESS_PREFIX_CACHED}${url}`)
        throw e
      }
    }
  }
  return axios.get(url, { headers: {'Accept': 'application/json', Authorization: `Bearer ${getToken()}` } })
              .then(
                (response) => {
                  if (allowCaching) {
                    try {
                      sessionStorage.setItem(`${SESS_PREFIX_CACHED}${url}`, JSON.stringify(response.data))
                    } catch(e) {
                      if (e.code == 22) {
                        console.warn('Session storage full: Could not cache item')
                      } else {
                        console.error(e);
                      }
                    }
                  }
                  return response.data
                },
                (error) => error
              )
}
