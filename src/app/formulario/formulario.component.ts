import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  miFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      campo1: ['', Validators.required],
      campo2: ['', [Validators.required, this.validarCampoPersonalizado]]
    });
  }

  ngOnInit(): void {}

  validarCampoPersonalizado(control: any) {
    return control.value && control.value.length > 5 ? null : { error: true };
  }

  enviarFormulario() {
    console.log(this.miFormulario.value);
  }
}
