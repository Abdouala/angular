import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  //lastUpdate = new Date();
  lastUpdate = new Observable<string>(observer => {
    setTimeout(() => observer.next(new Date().toString()), 2000);
  })

  appareils?: any[];
  appareilSubscription!: Subscription;

  /* appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur'; */

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      appareil => {
        this.appareils = appareil;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOfAll();
  }

  onSave(){
    this.appareilService.saveAppareilToServer();
  }

  onFetch(){
    this.appareilService.getAppareilsFromServer();
  }

}
