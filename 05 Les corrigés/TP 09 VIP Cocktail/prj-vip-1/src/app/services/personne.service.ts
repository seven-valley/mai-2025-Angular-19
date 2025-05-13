import { Subject } from "rxjs";
import { Personne } from "../models/personne";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonneService{
  constructor(private httpClient:HttpClient){}
    personneSubject = new Subject();
    url='https://alpha-javascript-default-rtdb.europe-west1.firebasedatabase.app/personnes.json'
    private personnes:Personne[]=[]; 
    emitSubject(){
      this.personneSubject.next(this.personnes);
    }  
      
     ajouter(p:Personne):void{
      this.personnes.push(p);
      this.saveFire();
     }  
     enlever(i:number):void{
      this.personnes.splice(i,1);
      this.saveFire();
     }  
     changer(i:number):void{
      this.personnes[i].status = !this.personnes[i].status;
      this.saveFire();
     }  
     loadFire(){
      this.httpClient.get<any[]>(this.url).subscribe(
        (response)=> {
          if ( response != undefined)
           this.personnes = response;
           this.emitSubject()
          }
      );
      this.emitSubject();
     }
     saveFire(){
      this.httpClient.put(this.url,this.personnes).subscribe(
        (response)=> {
           console.log(response);
           this.emitSubject()
          }
      );
     }

}