import { Injectable, signal, computed } from '@angular/core';
import { Paciente } from '../models/paciente.model';

@Injectable({ providedIn: 'root' })
export class PacienteService {
  private _pacientes = signal<Paciente[]>([]);
  pacientes = computed(() => this._pacientes());
  totalPacientes = computed(() => this._pacientes().length);
  aforoMaximo = 10;

  agregarPaciente(paciente: Paciente) {
    if (this.totalPacientes() < this.aforoMaximo) {
      this._pacientes.update(lista => [...lista, paciente]);
      return true;
    }
    return false;
  }

  eliminarPaciente(id: string) {
    this._pacientes.update(lista => lista.filter(p => p.id !== id));
  }
}