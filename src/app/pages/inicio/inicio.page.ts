import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';


interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}