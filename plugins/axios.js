export default function({ $axios }, inject) {
    const api = $axios.create({
        baseURL: 'http://localhost:4001/'
    })
    inject('api', api)
}