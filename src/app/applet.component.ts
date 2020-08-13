import { Component, Input } from '@angular/core';

@Component({
  selector: 'applet',
  templateUrl: './applet.component.html',
  styleUrls: [ './applet.component.css' ]
})
export class AppletComponent  {
  @Input() Applet: string;
}
