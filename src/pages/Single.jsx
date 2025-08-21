import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const { type, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${id}`)
      .then(res => res.json())
      .then(data => setItem(data.result.properties));
  }, [type, id]);

  if (!item) return <p className="text-center mt-5">Cargando...</p>;

  const imageUrl = `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageUrl} className="img-fluid" alt={item.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              {Object.entries(item).map(([key, value]) => (
                <p key={key}><strong>{key}:</strong> {value}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;