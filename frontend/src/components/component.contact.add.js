import { useState } from "react";
import { addProduct } from "../services/product.services";
import { Navigate, useNavigate } from "react-router-dom";

export function ContactAddForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(0);
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <form onSubmit={(e) => handleForm(e)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name :
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <br />
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          email :
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <br />
      <input className="btn btn-primary" type="submit" value={"Ajouter"} />
      <input className="btn btn-danger" type="reset" value={"Annuler"} />
    </form>
  );
}
