import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Lightbox } from "ngx-lightbox";

@Component({
  selector: "app-digital-art",
  templateUrl: "./digital-art.component.html",
  styleUrls: ["./digital-art.component.css"]
})
export class DigitalArtComponent implements OnInit {
  portfolioItems;
  _albums: any = [];
  imgHeight = 357;

  constructor(private cartService: CartService, private _lightbox: Lightbox) {}

  ngOnInit() {
    this.portfolioItems = this.cartService.getDigital();
    this.cartService.getDigital().subscribe(data => {
      console.log(data);
      this._albums = data;
    });
  }

  open(index: number): void {
    // open lightbox

    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
