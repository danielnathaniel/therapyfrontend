import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatgptService {
  private apiUrl = 'http://localhost:8080/greeting';

  constructor(private http: HttpClient) {}

  sendPrompt(prompt: string) {
    return this.http.post<string>(this.apiUrl, prompt, {
      responseType: 'text' as 'json',
    });
  }
}
