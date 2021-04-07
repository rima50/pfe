import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayPalService {

  constructor(private http : HttpClient) { }
  makePayment(sum) {
    return this.http.post('http://localhost:8080/paypal/make/payment?sum='+sum, {})
     // .map((response: Response) => response.json());
  }
  completePayment(paymentId, payerId) {
    return this.http.post('http://localhost:8080/paypal/complete/payment?paymentId=' + paymentId + '&payerId=' + payerId , {})
      //.map((response: Response) => response.json());
  }
}
