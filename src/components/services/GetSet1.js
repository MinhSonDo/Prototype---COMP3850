import axios from 'axios'

const url = '/api/set1'

const getSet1 = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const toBeExported = {getSet1}
export default toBeExported