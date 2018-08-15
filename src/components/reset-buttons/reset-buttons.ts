import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reset-buttons',
  templateUrl: 'reset-buttons.html'
})
export class ResetButtonsComponent {

  @Output() didReset: EventEmitter<string> = new EventEmitter<string>();

  onReset(type: string){
    this.didReset.emit(type); 
  }

}
