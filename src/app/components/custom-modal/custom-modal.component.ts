import { Component, OnInit,  } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
})
export class CustomModalComponent  implements OnInit {

  numTemp : string = "15" ;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  
  closeModal(){
    this.modalController.dismiss();
  }

  customActionSheetOptions = {
    header: 'Items select ',
    subHeader: 'Select your favorite item',
    cssClass:'customButtonAction'
    
  };

  customPopOverOptions = {
   
    
  };



}
