import {fetchData} from "../helpers/network";

const hotelAPI = {
    getHotels: () => fetchData('/hotels'),
    getHotel: (id: number) => fetchData(`/hotels/${id}`)
}

export default hotelAPI;