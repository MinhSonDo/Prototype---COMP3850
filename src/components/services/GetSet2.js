import axios from 'axios'

const url = '/api/set2'

const getSet2 = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const toBeExported = {getSet2}
export default toBeExported