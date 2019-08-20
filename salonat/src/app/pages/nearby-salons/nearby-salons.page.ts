import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/providers/translate-config.service';

@Component({
  selector: 'app-nearby-salons',
  templateUrl: './nearby-salons.page.html',
  styleUrls: ['./nearby-salons.page.scss'],
})
export class NearbySalonsPage implements OnInit {

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
