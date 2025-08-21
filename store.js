const getState = ({ getStore, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            favorites: JSON.parse(localStorage.getItem("favorites")) || []
        },
        actions: {
            getPeople: async () => {
                const resp = await fetch("https://www.swapi.tech/api/people");
                const data = await resp.json();
                setStore({ people: data.results });
            },
            getPlanets: async () => {
                const resp = await fetch("https://www.swapi.tech/api/planets");
                const data = await resp.json();
                setStore({ planets: data.results });
            },
            getVehicles: async () => {
                const resp = await fetch("https://www.swapi.tech/api/vehicles");
                const data = await resp.json();
                setStore({ vehicles: data.results });
            },
            addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.find(fav => fav.uid === item.uid)) {
                    const updated = [...store.favorites, item];
                    setStore({ favorites: updated });
                    localStorage.setItem("favorites", JSON.stringify(updated));
                }
            },
            removeFavorite: (uid) => {
                const store = getStore();
                const updated = store.favorites.filter(fav => fav.uid !== uid);
                setStore({ favorites: updated });
                localStorage.setItem("favorites", JSON.stringify(updated));
            }
        }
    };
};

export default getState;