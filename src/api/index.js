import axios from 'axios';
const url = "https://api.covidtracking.com/v1/states/current.json";

export default function getData(dispatch) {
    axios.get(url)
        .then((response) => {
            const covidData = response.data
            dispatch({
                type: "COVID19DATA",
                data: covidData
            })
        })
        .catch((error) => {
            console.error("Error: ", error)
        })
}