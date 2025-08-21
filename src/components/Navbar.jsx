import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-dark bg-dark mb-3 px-3">
            <Link to="/" className="navbar-brand">
                StarWars Blog
            </Link>
            <div className="dropdown">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                >
                    Favorites ({store.favorites.length})
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    {store.favorites.length === 0 && <li className="dropdown-item">No favorites yet</li>}
                    {store.favorites.map((item) => (
                        <li key={item.uid} className="dropdown-item d-flex justify-content-between">
                            {item.name}
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => actions.removeFavorite(item.uid)}
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;