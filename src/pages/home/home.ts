import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tapped:number = 0; 
  pressed:number = 0; 

  constructor(public navCtrl: NavController) {

  }

  onTapped(){
    this.tapped+=1; 
    console.log('tapped'); 
  }

  onPressed(){
    this.pressed+=1;
    console.log('pressed'); 
  }

  didWin(){
    return this.pressed == 4 && this.tapped == 2; 
  }


  onDidReset(resetType: string){
    switch (resetType) {
      case 'tap':
        this.tapped = 0; 
        break;
        case 'press':
        this.pressed = 0; 
        break;
    
      default:
        this.tapped = 0; 
        this.pressed = 0;  
        break;
    }
  }


}
