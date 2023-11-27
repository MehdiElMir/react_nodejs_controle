import { useEffect, useState } from "react";
import {
  deleteProductByID,
  getAllProducts,
} from "../services/product.services";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

export function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  async function fetchProducts() {
    const res = await getAllProducts();
    console.log(res.data);
    setProducts(res.data);
  }
  async function deleteProduct(id) {
    const res = await deleteProductByID(id);
    fetchProducts();
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>nom</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((elem, index) => (
            <tr key={index}>
              <td>{elem.name}</td>
              <td>{elem.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(elem._id)}
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to={"/products/new"} className="btn btn-info">
        Nouveau Produit <IoMdAddCircle />
      </Link>
    </>
  );
}
