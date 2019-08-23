import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateConfigService } from 'src/app/providers/translate-config.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;
@Component({
  selector: 'app-nearby-salons',
  templateUrl: './nearby-salons.page.html',
  styleUrls: ['./nearby-salons.page.scss'],
})
export class NearbySalonsPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  selectedLanguage: string;

  constructor(
    private translateConfigService: TranslateConfigService,
    private geolocation: Geolocation) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    // const watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   let latLng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
    //   let mapOptions = {
    //     center: latLng,
    //     zoom: 15,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   }
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // });
  }
  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit() {
    this.getLocation();

  }

}
