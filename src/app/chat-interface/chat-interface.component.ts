import { Component } from '@angular/core';
import { ChatgptService } from '../chatgpt.service';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css'],
})
export class ChatInterfaceComponent {
  prompt: string = '';
  response: string = '';

  constructor(private chatgptService: ChatgptService) {}

  sendPrompt() {
    this.chatgptService.sendPrompt(this.prompt).subscribe(
      (res) => (this.response = res),
      (err) => console.error(err)
    );
  }
}
