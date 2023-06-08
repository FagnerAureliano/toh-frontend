import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages: string[] = [];
  add(message: string): void {
    this.messages.push(message);
  }
  clear(): void {
    this.messages = [];
  }
  getMessages(): string[] {
    return this.messages;
  }
}
