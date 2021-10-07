import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName = '';
  @Input() appareilStatus = '';
  @Input() indexOfAppareil!: number;
  @Input() id!: number;

  color = '';
  //appareilName = 'Machine à laver';
  //appareilStatus = 'Eteint';

  constructor(private appareilService: AppareilService) { }

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

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOf(){
    this.appareilService.switchOfOne(this.indexOfAppareil);
  }

}
