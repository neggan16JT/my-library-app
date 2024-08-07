import { Libro } from "./Libro";
import { Transaccion } from "./Transaccion";

export class TiendaLibros {

    private catalogoLibros: Map<string, Libro>;
    private listaTransacciones: Transaccion[];
    private dinero: number;

    constructor(catalogoLibros: Libro[], listaTransacciones: Transaccion[], dineroInicial: number = 1000000) {
        this.catalogoLibros = new Map<string, Libro>();
        catalogoLibros.forEach(libro => this.catalogoLibros.set(libro.getISBN(), libro));
        this.listaTransacciones = listaTransacciones;
        this.dinero = dineroInicial;
    }

    abastecerLibro(libro: Libro): void {
        if (!this.catalogoLibros.has(libro.getISBN())) {
            this.catalogoLibros.set(libro.getISBN(), libro);
            const transaccion = new Transaccion("abastecimiento", new Date(), 1);
            this.listaTransacciones.push(transaccion);
            libro.agregarTransaccion(transaccion);
        } else {
            console.log(`El libro con ISBN ${libro.getISBN()} ya está en el catálogo.`);
        }
    }

    venderLibro(isbn: string): boolean {
        const libro = this.catalogoLibros.get(isbn);

        if (libro && libro.getCantidadActual() > 0) {
            libro.setCantidadActual(libro.getCantidadActual() - 1);
            this.dinero += libro.getPrecioVenta();

            const transaccion = new Transaccion("venta", new Date(), 1);
            this.listaTransacciones.push(transaccion);
            libro.agregarTransaccion(transaccion);

            // Eliminar el libro del catálogo si la cantidad llega a 0
            if (libro.getCantidadActual() === 0) {
                this.catalogoLibros.delete(isbn);
            }

            return true; // Venta exitosa
        } else {
            console.log(`El libro con ISBN ${isbn} no está disponible para la venta.`);
            return false; // Venta fallida
        }
    }

    getDinero(): number {
        return this.dinero;
    }

    getCatalogoLibros(): Map<string, Libro> {
        return this.catalogoLibros;
    }

    getListaTransacciones(): Transaccion[] {
        return this.listaTransacciones;
    }
}
