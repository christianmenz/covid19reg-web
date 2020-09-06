import { Component } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  data: String;
  dataUrl: String;

  async generate()  {
    this.dataUrl = await QRCode.toDataURL(this.data);
    console.log(this.dataUrl);

  }

}
