# Module 13 - Communiquer avec une  API

## Créer une API de type backend = NO Backend
Sur FireBase
Nous allons activer le service Real **Time Data Base**
<a href="">firebase</a>
  
    
<img src="../../img/td/td13/1-started.png" width="500">
  
:one: Créer un Projet 
   
<img src="../../img/td/td13/2-prj.png" width="300">


:two: Aller sur la section **Real Time data base**  
<img src="../../img/td/td13/3-real.png" width="600">

:three: Créer une **Real Time data base**  
<img src="../../img/td/td13/3-crea.png" width="600">
  
:four: Activer **le mode test**  
<img src="../../img/td/td13/4-test.png" width="400">

:five: Cliquez les les chaînes pour copier coller l'url de la data base  
<img src="../../img/td/td13/5-chaine.png" width="600">


:six: On copie colle le lien de la chaine dans l'attribut <code>url</code>  

```ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personnnes:any[] =[
    {prenom:'Brad',nom:'PITT'},
    {prenom:'Nicolas',nom:'CAGE'}
    ];
  url='https://alpha-javascript-default-rtdb.europe-west1.firebasedatabase.app/personnes.json';
  constructor(private httpClient:HttpClient){}
  onSave(){
   this.httpClient.put(this.url,this.personnnes).subscribe(
      (response)=> {
         console.log(response)}
    );
  }
  onRead(){
    this.httpClient.get<any[]>(this.url).subscribe(
      (response)=> {
         console.log(response)}
    );
  }
  
}
```