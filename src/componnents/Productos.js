import React, { Fragment } from 'react';

const Productos = () => {
    return (  
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>
            <tabla className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th className="col">Nombre</th>
                        <th className="col">Precio</th>
                        <th className="col">Acciones</th>
                    </tr>
                </thead>
                <tbody></tbody>


            </tabla>
        </Fragment>
    );
}
 
export default Productos;