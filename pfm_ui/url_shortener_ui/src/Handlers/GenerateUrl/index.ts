import axios from 'axios';
import generateUrlRoute from '../../ApiRoutes/GenerateUrlRoute';

export default async function GenerateUrl(url: string) {
    console.log(url)
    return axios.post(generateUrlRoute, { url: url })
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log(generateUrlRoute)
            console.error("Error:", error);
        });
}
