import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  sequence,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  animations: [
    trigger('fadein-left', [

      transition('void => *', [
        sequence([

          query('h2, p', style({
            opacity: 0, // 不可視化
            "margin-left": '-40px'
          })),

          query('h2, p', animate('4s ease-in-out', style({
            opacity: 1,
            "margin-left": '0px',
          }))),

        ]),
      ]),

    ]),
  ],
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
