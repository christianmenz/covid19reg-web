import { Component } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  email: String;
  freeText: String;
  table: String
  dataUrl: String;


  print() {
    window.print();
  }

  async generate() {
    this.dataUrl = await QRCode.toDataURL(
      JSON.stringify({ email: this.email, freeText: this.freeText, table: this.table }),
      {
        width: '500',
      }
    );
  }
}
