import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omikuji',
  templateUrl: './omikuji.component.html',
  styleUrls: ['./omikuji.component.css']
})
export class OmikujiComponent implements OnInit {

  omikuji = "";

  draw() {
    let kujis = ['大吉','中吉', '吉', '凶'];
    let selectkuji = Math.floor(Math.random()*kujis.length);
    this.omikuji = kujis[selectkuji];

  }

  constructor() { }

  ngOnInit(): void {
  }
}
