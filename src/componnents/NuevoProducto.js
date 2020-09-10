import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//action de redux
import { crearNuevoProductoAction } from "../actions/productosActions";

const NuevoProductos = () => {
  // utilizar el state
  const [nombre, setNonbre] = useState("");
  const [precio, setPrecio] = useState(0);

  // utilizar useDispach
  const dispatch = useDispatch();

   const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

  const submitNuevoProducto = (ev) => {
    ev.preventDefault();
    // validar formulario
    if (nombre.trim() === "" || precio <= 0) return;
    // si hay errores

    //crear el nuevo producto
    agregarProducto({
      nombre,
      precio
    })
  };
  return (
    <Fragment>
      <h1>NuevoProductos.JS</h1>
      <div className="col-md8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>

            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNonbre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => setPrecio(Number(e.target.value))}
                />

                <button
                  type="submit"
                  className="btn btn-primary font-weigth-bold text-uppercase 
                    d-block w-100"
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NuevoProductos;
