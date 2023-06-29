import http from "./http"
import { DELETE, GET, POST, PUT } from "../common"

const rinapi = async (type: string, url: string, parameter: any = {}, token: string = '') => {
    switch (type) {
        case GET:
            return await http.get(url, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        case POST:
            return await http.post(url, parameter, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
        case PUT:
            return await http.put(url, parameter, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        case DELETE:
            return await http.delete(url, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        default:
            break;
    }
}
export default rinapi