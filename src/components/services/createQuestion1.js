import axios from 'axios'

const url = '/api/create1'
const url2 = '/api/create2'
const url3 = '/api/create3'

const createQ1 = data => {
	const request = axios({ method: 'POST', url, data: { question1: data } })
	return request.then(response => response.data)
}

const createQ2 = data => {
	const request = axios({
		method: 'POST',
		url: url2,
		data: { question1: data }
	})
	return request.then(response => response.data)
}

const createQ3 = data => {
	const request = axios({
		method: 'POST',
		url: url3,
		data: { question1: data }
	})
	return request.then(response => response.data)
}

const toBeExported = { createQ1, createQ2, createQ3 }
export default toBeExported
