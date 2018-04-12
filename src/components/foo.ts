import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { UserService } from '../services/user'

@Component({
    selector: 'my-component',
    templateUrl: 'foo.html'
})

export class MyComponent {
    public sexo: boolean = false;

    constructor(public navCtrl: NavController, public userSrv: UserService) {        
        this.sexo = this.userSrv.sexo;
    }

    regresar(): void{
        this.navCtrl.pop();
    }

}