import http from "./http"
import { DELETE, GET, POST, PUT } from "../common"

const rinapi = async (type: string, url: string, parameter: any = {}, token: string = '', disableError = true) => {
    switch (type) {
        case GET:
            return await http.get(url, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).catch(error => {
                if (disableError) alert(error.message)
            })
        case POST:
            return await http.post(url, parameter, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).catch(error => {
                if (disableError) alert(error.message)
            });
        case PUT:
            return await http.put(url, parameter, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).catch(error => {
                if (disableError) alert(error.message)
            })
        case DELETE:
            return await http.delete(url, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).catch(error => {
                if (disableError) alert(error.message)
            })
        default:
            alert('Apa yang anda lakukan?');
    }
}
export default rinapi