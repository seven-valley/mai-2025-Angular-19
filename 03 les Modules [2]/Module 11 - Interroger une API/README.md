# Module 11 - Interroger une API
- Choisir une API à interroger
- Utiliser l’objet httpClient depuis un composant

<img src="../../img/td/td11/film.png" width="200">

## Ajouter le provideHttpClient  en tant provider
**app.config.ts**
```ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};
```
## Ajouter le HttpClient dans le composant
**app.component.ts**
```ts
import { HttpClient } from '@angular/common/http';
//...

export class AppComponent {
  img:string='';
  constructor(private httpClient: HttpClient){}
  onAfficher(){
  const key = "efdc2275";
  const url = `http://www.omdbapi.com/?apikey=${key}&t=star` ;
    this.httpClient.get<any>(url).subscribe(
     data => this.img = data['Poster']);
  } 
}
```


**app.component.html**
```html
<button (click)="onAfficher()">GO</button>
<br>
<img [src]="img" width="150">
```
<img src="../../img/td/td11/film-url.jpg" width="600">