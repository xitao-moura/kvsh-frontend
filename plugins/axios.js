export default function({ $axios }, inject) {
    const api = $axios.create({
        baseURL: 'http://3.86.49.73:4000/'
    })
    inject('api', api)
}