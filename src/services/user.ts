import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

    private _curp: string;
    private _sexo: boolean;

    constructor() {
        
    }

    set curp(curp: string){
        this._curp = curp;
    }

    get curp(): string{
        return this._curp;
    }

    set sexo(sexo: boolean){
        this._sexo = sexo;
    }

    get sexo(): boolean{
        return this._sexo;
    }

}
