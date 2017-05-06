import { Component } from '@angular/core';
import { NavController,NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-second',
  templateUrl: 'second.html'
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParam: NavParams,public viewCtrl:ViewController) {}

  ionViewDidLoad(){
    console.log("ionViewDidLod :: "+this.navParam.get('title'));
  }

  closeModal(){

      let data = {
          title:'hi',
          description:'dismissed data coming from second page'
      }
    this.viewCtrl.dismiss(data.title);
  }
}
