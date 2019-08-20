import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-salon',
  templateUrl: './add-salon.page.html',
  styleUrls: ['./add-salon.page.scss'],
})
export class AddSalonPage implements OnInit {
  addSalon: FormGroup;
  constructor(
    private modalCtrl: ModalController,
    private FB: FormBuilder) {
    this.addSalon = FB.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required, Validators.maxLength(15), Validators.minLength(10)],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  onSubmit() { }

}
