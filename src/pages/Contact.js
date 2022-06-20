//ROUTER
import { useLocation } from 'react-router-dom';
const Contact = () => {
    //STATE & VARIABLES
    const queryString = useLocation().search;

    const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get('name');

    console.log(queryString);
    return(
        <div>
            <h2>Hey {name}, Contact us here...</h2>
        </div>
    );
}

export default Contact;