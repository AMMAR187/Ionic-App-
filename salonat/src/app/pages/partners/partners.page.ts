import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/providers/translate-config.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.page.html',
  styleUrls: ['./partners.page.scss'],
})
export class PartnersPage implements OnInit {

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
