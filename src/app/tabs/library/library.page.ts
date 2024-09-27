import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  selectedSegmentValue: string = 'all';
  data: any[] = [];
  notAllData: any[] = [];

  constructor(
    private menu: MenuController,
    private dataService: DataService
  ) { }

  setSelectedSegment(e: any) {
    this.selectedSegmentValue = e.detail.value;
  }

  openMenu() {
    this.menu.open('first');
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;

      this.notAllData = this.data.filter(item => item.title !== 'Randevu' && item.title !== 'Ambulans');
    });
  }

}
