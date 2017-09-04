export class Direccion{
    protected _pais: string;
    protected _ciudad: string;
    protected _calle: string;

    constructor(pais :string, ciudad:string, calle:string){
        this._pais = pais;
        this._ciudad = ciudad;
        this._calle = calle;
    }

    get pais(): string {
        return this._pais;
    }
    set pais(pais: string) {                 
        this._pais = pais;
    }

    get ciudad(): string {
        return this._ciudad;
    }
    set ciudad(ciudad: string) {                 
        this._ciudad = ciudad;
    }

    get calle(): string {
        return this._calle;
    }
    set calle(calle: string) {                 
        this._calle = calle;
    }


}