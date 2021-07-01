import {fetchData} from "../helpers/network";

export default {
    fetchProfile: () => fetchData('/account'),
}
