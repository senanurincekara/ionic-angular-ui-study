import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
})
export class ContactModalComponent implements OnInit {
  textMessage!: FormGroup;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.textMessage = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(6)]], 
    });
  }

  getErrorControl() {
    return this.textMessage.controls;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async checkForm() {
    if (this.textMessage.invalid) {
      const alert = await this.alertController.create({
        header: 'Uyarı',
        message: 'Lütfen tüm alanları doğru şekilde doldurun.',
        buttons: ['Tamam'],
        cssClass: 'my-custom-class'
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Mesaj Gönderildi',
        message: 'Bizimle görüşlerinizi paylaştığınız için teşekkür ederiz!',
        buttons: ['Tamam'],
        cssClass: 'my-custom-class'
      });
      await alert.present();
      this.closeModal(); 
    }
  }
}
