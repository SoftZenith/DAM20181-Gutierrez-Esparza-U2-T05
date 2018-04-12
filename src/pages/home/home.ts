import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../services/user";
import { ResultadoPage } from "../resultado/resultado";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  curp: string = "";

  constructor(public navCtrl: NavController, 
    public userSrv: UserService) {
      this.userSrv.curp = "";
  }

  adivinar(): void{
    this.userSrv.curp = this.curp.toUpperCase();

    if(this.userSrv.curp.charAt(10) == 'H'){
      this.userSrv.sexo = true;
    }if(this.userSrv.curp.charAt(10) == 'M'){
      this.userSrv.sexo = false;
    }else{
      console.log("Error en tu curp");
    }
    this.navCtrl.push(ResultadoPage);
  }

}
