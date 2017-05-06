import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
import {SecondPage} from '../second/second';
import { User } from '../../providers/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl : ModalController,public userService:User) {

  }

ionViewDidLoad(){
  console.log("first page load ::"+ this.userService.name);
}

  launchSecondPage(){
    let data={
      title:'My data from first page',
      description:['data 1','data 2'],
      
    };
    console.log("clicked first page");
    this.navCtrl.push(SecondPage,data);
  }

  launchSecondPageUsingModalCtrl(){
     let modal = this.modalCtrl.create(SecondPage);

     modal.onDidDismiss((data)=>{
       console.log("onDidDismiss :: " + data);
     });

     modal.present();
  }

}
