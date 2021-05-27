
import { Request } from '@/utils/request';


class newCity {
    city() {
        return Request.axiosInstance({
            url: 'api/province',
            method: 'get',
        })
    }
    map() {
        return Request.axiosInstance({
            url: 'api/map',
            method: 'get',
        })
    }
}

const HttpCity = new newCity()
export default HttpCity