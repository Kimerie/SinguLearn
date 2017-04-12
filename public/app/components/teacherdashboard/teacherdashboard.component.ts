import {Component, OnInit}        from '../node_modules/@angular/core/@anular/core';
import {Router, Route}            from '@angular/router';
import {TeacherDashService}       from './teacherdashboard.services';
import {StudentListComponent}     from './studentlist.component';
import {ContentListComponent}     from './contentlist.component';
import 'rxjs/add/operator/catch';

@Component({
selector: 'teacherDashboard',
templateUrl: './teacherDashView.html',
providers: [TeacherDashService]
})


export class TeacherDashboardComponent implements OnInit {
  products = []
  constructor (private teacherDashService : TeacherDashService) {};

  //saves base-64 encoded ChipN client access token to local storage
  saveClientAccessToken (clientAccessToken) {
    if(clientAccessToken) {
      const encodedAccessToken = this.marketplaceService.encode(clientAccessToken)
      localStorage.setItem('chipNAccessToken', encodedAccessToken)
    }
  }

  //saves base-64 encoded nonce to local storage
  saveNonce (nonce) {
    if(nonce) {
      const encodedNonce = this.marketplaceService.encode(nonce)
      localStorage.setItem('nonce', encodedNonce)
    }
  }

  //method to get ChipN client access token
  getClientAccessToken() {
    this.marketplaceService.getChipnClientAccessToken()
    .subscribe(
      data => {
              this.saveClientAccessToken(data['payloadObject'].token)
              this.saveNonce(data['nonce'].nonceValue)
              },
      error => console.error(error));
    };

  //Method to get markeplace items
  getMarketplaceItems() {
    this.getClientAccessToken()
    const chipNAccessToken = localStorage['chipNAccessToken']
    let nonce = localStorage['nonce']

    this.marketplaceService.getMarketplaceItems(chipNAccessToken, nonce)
    .subscribe(
      data => this.storeMarketplaceItems(data["payloadObject"].products),
      error =>  console.error(error));
  };

  storeMarketplaceItems (products) {
    this.products = products

  };

  //get initial state of component
  ngOnInit() {
    this.getMarketplaceItems()
 }

}
