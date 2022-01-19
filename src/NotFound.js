import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404 Not found</h1>
      <h3>Sorry, we couldn't find the page that you are looking for...</h3>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
};

export default NotFound;
