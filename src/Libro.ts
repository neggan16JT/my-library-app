import { Transaccion } from "./Transaccion";

interface LibroProps {
    isbn: string;
    titulo: string;
    imagen: string;
    precioCompra: number;
    precioVenta: number;
    cantidadActual: number;
    listaTransacciones: Transaccion[];
}

export class Libro {
    private props: LibroProps;

    constructor(props: LibroProps) {
        this.props = props;
    }

    get isbn(): string {
        return this.props.isbn;
    }

    get titulo(): string {
        return this.props.titulo;
    }

    get imagen(): string {
        return this.props.imagen;
    }

    get precioCompra(): number {
        return this.props.precioCompra;
    }

    get precioVenta(): number {
        return this.props.precioVenta;
    }

    get cantidadActual(): number {
        return this.props.cantidadActual;
    }

    get listaTransacciones(): Transaccion[] {
        return this.props.listaTransacciones;
    }

    agregarTransaccion(transaccion: Transaccion): void {
        this.props.listaTransacciones.push(transaccion);
    }
}
