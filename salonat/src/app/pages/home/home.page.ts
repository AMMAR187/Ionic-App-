import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/providers/translate-config.service';
import { NavController } from '@ionic/angular';
import { SalonDetailsPage } from '../salon-details/salon-details.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  selectedLanguage: string;
  constructor(private translateConfigService: TranslateConfigService
    , private navCtrl: NavController) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
  ngOnInit() {
  }
  showDetails() {
    this.navCtrl.navigateForward('salon-details');
  }

}
