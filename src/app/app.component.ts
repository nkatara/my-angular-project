import { Component } from '@angular/core';
import {MyServiceService} from './my-service.service';

//Componet decorator
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `


//Loading another component
  <app-my-new-comp></app-my-new-comp>
  

    <h1> Hey guys! </h1>
    <p>How are you? {{myObject.location}}</p>

    <ul>
      <li *ngFor="let arr of myArr">{{arr}}</li>
    </ul>

    <ul>
      <li *ngIf="isValid == false">Yeah, I exist.</li>
    </ul>

<ul>
  <li *ngIf="myText == 'Something' else otherTmpl">Coming from if</li>
</ul>

<ng-template #otherTmpl>Coming from else.</ng-template>


<div *ngIf="myText=='Something1' then temp1 else temp2"></div>

<ng-template #temp1>I am template 100</ng-template>
<ng-template #temp2>I am template 200</ng-template>

<br/>
<img src={{myLogo}}>
<img [src]="myLogo">
<img bind-src="myLogo">

<button [disabled]="myButtonStatus">My button</button>

<button (click)="myClick($event)">Event Button</button>
<button (mouseenter)="myClick($event)">Event Button</button>

<h1 [class] = "myTextClass">Class Binding example</h1>

<h1 [class.red-title] = "myAnotherTextClass">Another way to deal with Class Binding example</h1>

<!--ngClass directive-->
<h1 [ngClass] = "MultipleClasses">Multiple Classes Binding example</h1>

<h1 [style.color] = "titleStyle">style Binding example</h1>
<h1 [style.color] = "titleStyleConditional ? 'green' : 'pink'" >conditional style Binding example</h1>

<!--ngStyle directive-->
<h1 [ngStyle] = "ngStyleDirective" >ngDirective style Binding example</h1>

<p>{{someProperty}}

  `
  ,
  //styleUrls: ['./app.component.css']
  styles:[`
    h1{
      text-decoration:underline;
    }
    .red-title{
      color:red;
    }
    .large-title{
      font-size:4em
    }
  `]
})

//Coomponent Class
export class AppComponent {

  constructor(private myServiceService: MyServiceService){

  }

//this is ngOnInit life cycle hook, this says anything define within this load when component loads. 
  ngOnInit(){
    console.log(this.myServiceService.cars);
    this.someProperty =this.myServiceService.myData();
  }

  someProperty:string = '';

  //Component property
  title = 'app works!';

//Object property
  myObject = {
    gender: 'male',
    age:33,
    location: 'USA'
  };

//Array property
  myArr = ['him', 'hers', 'yours'];

//Boolean property
  isValid = false;

//string property
  myText='Something1';

//image path property  
  myLogo = './assets/myLogo.ico'; //'favicon.ico';

//Boolean property for button
  myButtonStatus = true; 

//event defination
  myClick(event)
  {
    console.log(event);
  }

//Component css style class property
  myTextClass = 'red-title';

//Component css style class Boolean property
  myAnotherTextClass = false;

//Component css style multiple classes property
  MultipleClasses = {
    'red-title':true,
    'large-title':true
  };

//Propery style binding
  titleStyle='red';

  //Conditional style binding
  titleStyleConditional=true;

//ng Style directive
  ngStyleDirective={
    'color':'red',
    'font-size':'4em'
  };
}
