import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/providers/translate-config.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AddSalonPage } from '../add-salon/add-salon.page';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm: FormGroup;
  selectedLanguage: string;
  constructor(
    private translateConfigService: TranslateConfigService,
    private Fb: FormBuilder,
    private modalController: ModalController) {

    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.contactForm = Fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required],
      type: ['', Validators.required]
    });
  }
  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
  onSubmit() { }

  ngOnInit() {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: AddSalonPage
    });
    return await modal.present();
  }

}
