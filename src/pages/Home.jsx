import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
        actions.getPlanets();
        actions.getVehicles();
    }, []);

    return (
        <div className="container mt-4">
            <h1>Star Wars Databank</h1>

            <h3>Characters</h3>
            <div className="d-flex overflow-auto">
                {store.people.map((item) => (
                    <div key={item.uid} className="card m-2" style={{ minWidth: "200px" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                            className="card-img-top"
                            alt={item.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => actions.addFavorite(item)}
                            >
                                ⭐ Add to Favorites
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="mt-4">Planets</h3>
            <div className="d-flex overflow-auto">
                {store.planets.map((item) => (
                    <div key={item.uid} className="card m-2" style={{ minWidth: "200px" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                            className="card-img-top"
                            alt={item.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => actions.addFavorite(item)}
                            >
                                ⭐ Add to Favorites
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="mt-4">Vehicles</h3>
            <div className="d-flex overflow-auto">
                {store.vehicles.map((item) => (
                    <div key={item.uid} className="card m-2" style={{ minWidth: "200px" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
                            className="card-img-top"
                            alt={item.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => actions.addFavorite(item)}
                            >
                                ⭐ Add to Favorites
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;