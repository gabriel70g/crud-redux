import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';


// crear neuvos productos

export function crearNuevoProductoAction(producto) {
    return async (dispactch) =>{
        console.log(producto);

        dispactch(agregarProducto());

        try{
            //insertar en la api
            await clienteAxios.post('/productos', producto);
            // si todo sale bien, actualizar el state
            dispactch(agregarProductoExito(producto))

        }catch(err){
            console.log(err);
            //si hay un error cambiar el state
            dispactch(agregarProductoError(true))
        }

    }
};

    const agregarProducto = () => ({
        type: AGREGAR_PRODUCTO,
        payload: true
    })


// si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    poyload: producto
})

const agregarProductoError = (estado) =>({
    type: AGREGAR_PRODUCTO_ERROR,
     payload: estado
})