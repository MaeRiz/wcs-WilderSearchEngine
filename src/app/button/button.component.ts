import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title: string = ''
  @Input() color: string = ''
  @Input() txtcolor: string = 'white'

  @Output() messageFromChild: EventEmitter<string> = new EventEmitter<string>();

  handleClickBtn = (): void => {
    this.messageFromChild.emit('Merci de vous interressez à notre réseau social: '+ this.title)
  }
}
