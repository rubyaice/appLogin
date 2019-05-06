import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private navCtrl: NavController, private http: Http) {

  }

  login_page() {
    this.router.navigate(['/login']);
  }

  traerGetRequest() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    this.http.post('http://127.0.0.1:3000/customers', requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
}
