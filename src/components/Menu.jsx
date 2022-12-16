import { Link } from "react-router-dom";
import "../App.css";

export function Menu() {
  return (
    <div className="Menu">
      <div className="menu">
        <Link className="linkB" to="/">
          Home
        </Link>

        <Link className="linkB" to="/UseState">
          UseState
        </Link>

        <Link className="linkB" to="/UseEffect">
          UseEffect
        </Link>
      </div>
    </div>
  );
}
