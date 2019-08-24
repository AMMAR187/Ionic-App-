
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private translate: TranslateService,
    private platform: Platform, ) { }
  getDefaultLanguage() {
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }
  setLanguage(setLang) {
    this.translate.use(setLang);
  }
  getMenu() {
    this.translate.get('home').subscribe((menu) => {
      console.log(menu);
      return menu;
    });
  }
}
