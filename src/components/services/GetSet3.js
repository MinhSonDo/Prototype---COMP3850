import axios from 'axios'

const url = '/api/set3'

const getSet3 = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const toBeExported = {getSet3}
export default toBeExported