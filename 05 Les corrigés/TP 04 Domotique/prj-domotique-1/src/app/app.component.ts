import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppareilComponent } from './appareil/appareil.component';
import { Appareil } from './models/appareils';
import { NgForm,FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AppareilComponent,FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nom:string='';
  appareils:Appareil[]=[];
  ajouter(f:NgForm){

    const a = new Appareil(f.value['nom'])
    console.log(a);
    f.reset();
    this.appareils.push(a);
  }
}
