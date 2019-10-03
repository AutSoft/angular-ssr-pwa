import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'nova-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nova-flight';

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Nova service angular tanfolyam');

    this.meta.addTag({name: 'twitter:card', content: 'summary_large_image'});
    this.meta.addTag({name: 'twitter:site', content: '@bricsard'});
    this.meta.addTag({name: 'og:title', content: 'Nova service - Main page'});
    this.meta.addTag({name: 'og:description', content: 'Nova service tanfolyam repulo listazas demo'});
    this.meta.addTag({name: 'og:image', content: 'https://www.rd.com/wp-content/uploads/2018/01/01_Common-Myths-About-Airplanes-You-Need-to-Stop-Believing_559714906_motive56-760x506.jpg'});
  }
}

