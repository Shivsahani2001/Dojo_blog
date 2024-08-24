import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 

        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page Can not be Found...</p>
            <Link to = "/">Back to home page...</Link>
        </div>
     );
}
 
export default NotFound;