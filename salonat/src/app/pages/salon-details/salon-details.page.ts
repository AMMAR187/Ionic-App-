import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-salon-details',
  templateUrl: './salon-details.page.html',
  styleUrls: ['./salon-details.page.scss'],
})
export class SalonDetailsPage implements OnInit {
  segment='info';
  images = ['../assets/images/6.jpg', '../assets/images/7.jpg', '../assets/images/8.jpg', '../assets/images/9.jpg'];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.navCtrl.pop();
  }

}
