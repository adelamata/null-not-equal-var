import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor() {
    const obj = {} as any;

    console.log (obj.proper === null);
    console.log (!obj.proper);
  }
}
