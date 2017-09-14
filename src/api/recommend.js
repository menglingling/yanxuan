import axios from 'axios'
const commonParams = {}

export function getheadCateList () {
  const url = '/api/headCateList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}


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

export function getnewItemList () {
  const url = '/api/newItemList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getpopularItemList () {
  const url = '/api/popularItemList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getflashSaleIndexVO () {
  const url = '/api/flashSaleIndexVO'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getcateList () {
  const url = '/api/cateList'
  const data = Object.assign({}, commonParams, {})
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}



