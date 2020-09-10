import React, {Fragment} from 'react';


const EditarProductos = () => {
    return (  
        <Fragment>
        <h1>NuevoProductos.JS</h1>
        <div className="col-md8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Editar producto
              </h2>
  
              <form>
                <div className="form-group">
                  <label>Nombre producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del producto"
                    name="nombre"
                  />
                </div>
  
                <div className="form-group">
                  <label>Precio producto</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Nombre del producto"
                    name="precio"
                  />
  
                  <button
                    type="submit"
                    className="btn btn-primary font-weigth-bold text-uppercase 
                      d-block w-100"
                  >
                    Guardar cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
}
 
export default EditarProductos;