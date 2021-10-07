import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy{

  secondes!: number;
  counterSubscription!: Subscription;

  constructor() {}

  ngOnInit(){
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(n => this.secondes = n)
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }

}
