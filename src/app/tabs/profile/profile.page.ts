import { Component, OnInit } from '@angular/core';
import { MenuController ,ModalController} from '@ionic/angular';

import { CustomModalComponent } from 'src/app/components/custom-modal/custom-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  


  constructor(private menu: MenuController, private modalController: ModalController) {

  }


  async presentContactModal() {
    const modal = await this.modalController.create({
      component: CustomModalComponent,
    });
    return await modal.present();
  }

  openMenu() {
   this.menu.open('first'); 
 }

 handleRefresh(event:any) {

  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 2000);
}


  ngOnInit() {
  }

}
