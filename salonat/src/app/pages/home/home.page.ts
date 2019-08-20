import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/providers/translate-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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
