import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
