export class Transaccion {
    private tipoTransaccion: string;
    private fechaRealizacion: Date;
    private cantidadEjemplares: number;

    constructor(tipoTransaccion: string, fechaRealizacion: Date, cantidadEjemplares: number) {
        this.setTipoTransaccion(tipoTransaccion);
        this.setFechaRealizacion(fechaRealizacion);
        this.setCantidadEjemplares(cantidadEjemplares);
    }

    // Getters
    public getTipoTransaccion(): string {
        return this.tipoTransaccion;
    }

    public getFechaRealizacion(): Date {
        return this.fechaRealizacion;
    }

    public getCantidadEjemplares(): number {
        return this.cantidadEjemplares;
    }

    // Setters con validaciones básicas
    public setTipoTransaccion(tipoTransaccion: string): void {
        if (!tipoTransaccion) {
            throw new Error("Tipo de transacción no puede ser vacío.");
        }
        this.tipoTransaccion = tipoTransaccion;
    }

    public setFechaRealizacion(fechaRealizacion: Date): void {
        if (!(fechaRealizacion instanceof Date) || isNaN(fechaRealizacion.getTime())) {
            throw new Error("Fecha de realización inválida.");
        }
        this.fechaRealizacion = fechaRealizacion;
    }

    public setCantidadEjemplares(cantidadEjemplares: number): void {
        if (cantidadEjemplares < 0) {
            throw new Error("La cantidad de ejemplares no puede ser negativa.");
        }
        this.cantidadEjemplares = cantidadEjemplares;
    }
}
