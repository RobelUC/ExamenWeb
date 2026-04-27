import { Component } from '@angular/core';
import { GestionPacientesComponent } from './components/gestion-pacientes/gestion-pacientes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GestionPacientesComponent],
  template: `<app-gestion-pacientes></app-gestion-pacientes>`
})
export class AppComponent { }