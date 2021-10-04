import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName = '';
  @Input() appareilStatus = '';

  color = '';
  //appareilName = 'Machine à laver';
  //appareilStatus = 'Eteint';

  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    if(this.appareilStatus === 'allumé'){
      this.color = 'green';
    }else if(this.appareilStatus === 'éteint'){
      return this.color = 'red';
    }
    return this.color;
  }

}
