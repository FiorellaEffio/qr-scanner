import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;

  constructor(private barcodeScanner: BarcodeScanner) {

          this.products = [
            {
              "plu":"01234567895",
              "name":"Gaming DDR5 RAM 16GB",
              "price":76,
              "desc":"Gaming DDR5 RAM 16GB PC-128000 For x64 PC"
            },
            {
              "plu":"01234567898",
              "name":"Intel Core i7 3.3GHz",
              "price":200,
              "desc":"Intel Core i7 3.3GHz L2 16MB 4.6ns"
            }
          ];
          console.log(this.products);
    }
    scan() {
      this.selectedProduct = {};
      this.barcodeScanner.scan().then((barcodeData) => {
        this.selectedProduct = barcodeData.text;
        this.productFound = true;

      }, (err) => {
        console.log("no hay nada");
      });
    }
}
