import axios from 'axios'
const commonParams = {}

export function getfocusList () {
  const url = '/api/focusList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getpolicyDescList () {
  const url = '/api/policyDescList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getTagList () {
  const url = '/api/tagList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
