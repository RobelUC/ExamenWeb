import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-pacientes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gestion-pacientes.component.html'
})
export class GestionPacientesComponent {
  private fb = inject(FormBuilder);
  public ps = inject(PacienteService);

  pacienteForm: FormGroup = this.fb.group({
    nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
    dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    edad: ['', [Validators.required, Validators.min(0), Validators.max(120)]],
    seguroMedico: ['', Validators.required],
    fechaIngreso: ['', Validators.required]
  });

  registrar() {
    if (this.pacienteForm.valid) {
      const nuevo: Paciente = { ...this.pacienteForm.value, id: crypto.randomUUID() };
      if (this.ps.agregarPaciente(nuevo)) {
        this.pacienteForm.reset();
      }
    }
  }
}