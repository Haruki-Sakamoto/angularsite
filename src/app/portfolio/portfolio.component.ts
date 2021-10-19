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
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('fadein-title', [

      transition('void => *', [
        sequence([

          query('h2', style({
            opacity: 0, // 不可視化
            "margin-left": '-20px'
          })),

          query('h2', animate('4s ease-in-out', style({
            opacity: 0.8,
            "margin-left": '0px',
          }))),

        ]),
      ]),

    ]),

    trigger('fadein-img', [

      transition('void => *', [
        sequence([

          query('img', style({
            opacity: 0, // 不可視化
            "margin-left": '-40px'
          })),

          query('img', animate('0.5s', style({}))),

          query('img', animate('3.5s ease-in-out', style({
            opacity: 1,
            "margin-left": '0px',
          }))),

        ]),
      ]),

    ]),
  ],
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

{
  function callback(entries, obs) {
     entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }
  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });
  }
