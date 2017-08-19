import { Component, OnInit } from '@angular/core';
import {trigger, state, style,transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-my-new-comp',
  templateUrl: './my-new-comp.component.html',
  styleUrls: ['./my-new-comp.component.css'],
  animations:[
    trigger('myAwsomeAnimation',[
      //Defines first state
      state('small', style({
        transform:'scale(1)'
      })),
      //Defines second state
       state('large', style({
        transform:'scale(1.2)'
      })),
      //Defines state transition with second parameter animations
      //To work animation in one direction =>
      //To work animation in reverse direction <=
      //To work animation in both the direction <=>
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity:0, transform: 'translateY(-75%)', offset:0}),
        style({opacity:1, transform: 'translateY(35px)', offset:.5}),
        style({opacity:1, transform: 'translateY(0)', offset:1}),
      ]))),
    ])
  ]
})

export class MyNewCompComponent implements OnInit {

state:string = 'small';

  constructor() { }

  ngOnInit() {
  }

  animateMe()
  {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
