import axios from 'axios'
const commonParams = {}
const prefixUrl = '/api/home'

export function getheadCateList () {
  const url = prefixUrl + '/headCateList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getfocusList () {
  const url = prefixUrl + '/focusList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getpolicyDescList () {
  const url = prefixUrl + '/policyDescList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getTagList () {
  const url = prefixUrl + '/tagList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getnewItemList () {
  const url = prefixUrl + '/newItemList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getpopularItemList () {
  const url = prefixUrl + '/popularItemList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getflashSaleIndexVO () {
  const url = prefixUrl + '/flashSaleIndexVO'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getcateList () {
  const url = prefixUrl + '/cateList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}



