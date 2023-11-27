import { useState } from "react";
import { addProduct } from "../services/product.services";
import { Navigate, useNavigate } from "react-router-dom";

export function ProductAddForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();
    const p = { name: name, price: price };
    addProduct(p);
    navigate("/products");
  }

  return (
    <form onSubmit={(e) => handleForm(e)}>
      <label htmlFor="nom" className="form-label">
        Nom :
      </label>
      <input
        type="text"
        className="form-control"
        id="nom"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <br />
      <label htmlFor="price" className="form-label">
        price :
      </label>
      <input
        type="number"
        className="form-control"
        id="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br />
      <input className="btn btn-primary" type="submit" value={"Enregistrer"} />
      <input className="btn btn-danger" type="reset" value={"Annuler"} />
    </form>
  );
}
