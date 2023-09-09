import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  const contactos = useSelector((state) => state);
  const enviar = useDispatch();

  const eliminarContacto = (id) => {
    enviar({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted!");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <Link to="/add" className="btn btn-outline-dark">
              Add new contact
            </Link>
          </div>
          <div className="col-12 mt-4 table-responsive">
            <table className="table table-hover">
              <thead className="text-white bg-dark text-center">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Date of birth</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Mail</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {contactos.map((contacto, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contacto.Nombre}</td>
                    <td>{contacto.Nacimiento}</td>
                    <td>{contacto.Telefono}</td>
                    <td>{contacto.Correo}</td>
                    <td>
                      <Link
                        to={`/update/${contacto.id}`}
                        className="btn btn-small btn-primary mr-2"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => eliminarContacto(contacto.id)}
                        type="button"
                        className="btn btn-small btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
