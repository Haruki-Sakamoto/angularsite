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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadein-title', [

      transition('void => *', [
        sequence([

          query('h2', style({
            opacity: 0,
            "margin-left": '-20px'
          })),

          query('h2', animate('3s ease-in-out', style({
            opacity: 1,
            "margin-left": '0px',
          }))),

        ]),
      ]),

    ])
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
