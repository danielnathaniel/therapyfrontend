// Example Angular component that uses ChatgptService

import { Component } from '@angular/core';
import { ChatgptService } from './chatgpt.service';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="prompt" type="text" placeholder="Enter your prompt" />
    <button (click)="sendPrompt()">Send</button>
    <div>Response: {{ response }}</div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  prompt = '';
  response = '';

  constructor(private chatgptService: ChatgptService) {}

  sendPrompt() {
    this.chatgptService.sendPrompt(this.prompt).subscribe(
      (data) => (this.response = data),
      (error) => console.error(error)
    );
  }
}
