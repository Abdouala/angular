import { Subject } from "rxjs";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()

export class AppareilService {

  appareilSubject = new Subject<any[]>();

  //private appareils = []; // Ce type de déclaration ne marche pas
  private appareils: any[] = []; // OK

  constructor(private httpClient: HttpClient){}

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice()); // Slice : copie du tableau users
  }

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll(){
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOfAll(){
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOfOne(index: number){
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string){
    const appareilObject = { id:0, name: '', status:'' };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilToServer(){
    this.httpClient
    .put('https://angular-httpclient-37ce3-default-rtdb.firebaseio.com/appareils.json', this.appareils)
    .subscribe(
      () => { console.log('Enregstrement terminé !') },
      (error) => { console.log('Erreur de sauvegarde !' + error) }
    )
  }

  getAppareilsFromServer(){
    this.httpClient
    .get<any[]>('https://angular-httpclient-37ce3-default-rtdb.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) =>{ console.log('Erreur de chargement !' + error) }
    )
  }

}
