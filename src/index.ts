import { TiendaLibros } from "./TiendaLibros";
import { Libro } from "./Libro";
import { Transaccion } from "./Transaccion";

// Crear una transacción
const trans1 = new Transaccion("si", new Date(), 2);
const transArray: Transaccion[] = [trans1];

// Crear un libro usando la clase Libro
const libro1 = new Libro(
    "434",
    "hola",
    "imagen",
    2000,
    3000,
    3,
    transArray
);

// Crear un catálogo vacío de libros
const catalogoLibrosVacio: Libro[] = [];

// Crear una lista vacía de transacciones
const listaTransaccionesVacia: Transaccion[] = [];

// Instanciar el objeto TiendaLibros con el catálogo vacío
const tienda = new TiendaLibros(catalogoLibrosVacio, listaTransaccionesVacia);

// Utilizar el método abastecerLibro para añadir el libro a la tienda
tienda.abastecerLibro(libro1);

console.log(tienda);
console.log("------------------------------------------------------------");

// Realizar una venta de libro
tienda.venderLibro(libro1);

console.log(tienda);
