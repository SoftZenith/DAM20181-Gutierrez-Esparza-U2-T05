import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../services/user";

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  curp: string = "";
  sexo: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userSrv: UserService) {
    this.curp = this.userSrv.curp;
    this.sexo = this.userSrv.sexo;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

}
