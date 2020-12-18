import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Lightbox } from "ngx-lightbox";

@Component({
  selector: "app-illustrations",
  templateUrl: "./illustrations.component.html",
  styleUrls: ["./illustrations.component.css"]
})
export class IllustrationsComponent implements OnInit {
  portfolioItems;
  _albums: any = [];
  imgHeight = 357;

  constructor(private cartService: CartService, private _lightbox: Lightbox) {}

  ngOnInit() {
    this.portfolioItems = this.cartService.getIllustrations();
    this.cartService.getIllustrations().subscribe(data => {
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
