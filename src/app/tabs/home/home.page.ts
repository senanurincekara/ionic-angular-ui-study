import { Component, OnInit } from '@angular/core';
import { IonicSlides, ModalController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

import { ContactModalComponent } from 'src/app/components/contact-modal/contact-modal.component';
import { DataService } from 'src/app/service/data.service';
import { CardsliderComponent } from 'src/app/components/cardslider/cardslider.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  list1:any=[];
  list2:any=[];

  isPickerOpen = false;

  public progress = 0;

  data: any[] = [];

  constructor(private menu: MenuController,
     private modalController: ModalController,
     private dataService: DataService,
     public navCtrl: NavController
    ) {
  
   }

   openMenu() {
    this.menu.open('first'); 
  }

  async presentContactModal() {
    const modal = await this.modalController.create({
      component: ContactModalComponent,
    });
    return await modal.present();
  }


  setOpen(isOpen: boolean) {
    this.isPickerOpen = isOpen;
  }


  public pickerColumns = [
    {
      name: 'ilaçlar',
      options: [
        {
          text: 'Parasetamol',
          value: 'parasetamol',
        },
        {
          text: 'İbuprofen',
          value: 'ibuprofen',
        },
        {
          text: 'Amoksisilin',
          value: 'amoksisilin',
        },
      ],
    },
    {
      name: 'tedaviler',
      options: [
        {
          text: 'Fizik Tedavi',
          value: 'fizik-tedavi',
        },
        {
          text: 'Kemoterapi',
          value: 'kemoterapi',
        },
        {
          text: 'Radyoterapi',
          value: 'radyoterapi',
        },
      ],
    },
    {
      name: 'testler',
      options: [
        {
          text: 'Kan Tahlili',
          value: 'kan-tahlili',
        },
        {
          text: 'MR (Manyetik Rezonans)',
          value: 'mr',
        },
        {
          text: 'Röntgen',
          value: 'rontgen',
        },
      ],
    },
  ];



  public pickerButtons = [
    {
      text: 'İptal',
      role: 'cancel',
    },
    {
      text: 'Onayla',
      handler: (value:any) => {
        console.log(`Seçtiğiniz tedavi: ${value.tedaviler.text}, ilaç: ${value.ilaclar.text}, test: ${value.testler.text}`);
      },
    },
  ];


  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }

  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  gotoProfilePage() {
    this.navCtrl.navigateForward('/tabs/profile');
  }
  


}
