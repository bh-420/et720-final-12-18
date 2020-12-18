import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }

  getGraphic() {
    return this.http.get("/assets/graphic.json");
  }

  getDigital() {
    return this.http.get("/assets/digital.json");
  }

  getIllustrations() {
    return this.http.get("/assets/illustrations.json");
  }
  constructor(private http: HttpClient) {}
}
