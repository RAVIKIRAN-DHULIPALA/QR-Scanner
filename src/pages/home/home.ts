import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import {
  BarcodeScanner,
  BarcodeScannerOptions
} from "@ionic-native/barcode-scanner";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  options: BarcodeScannerOptions;
  qrData = null;
  createdCode = null;
  scannedCode = null;
  urldata = null;
  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner
  ) {}
  createCode() {
    this.createdCode = this.qrData;
  }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });
  }
  openURL() {
    console.log(this.scannedCode);
  }
}
