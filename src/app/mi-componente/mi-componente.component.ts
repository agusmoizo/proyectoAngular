import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {
  @Output() miEvento = new EventEmitter<string>();

  emitirEvento() {
    this.miEvento.emit('Evento emitido desde Mi Componente');
  }
}
