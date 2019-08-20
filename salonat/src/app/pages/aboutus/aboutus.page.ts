import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/providers/translate-config.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  selectedLanguage: string;
  constructor(private translateConfigService: TranslateConfigService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit() {
  }

}
