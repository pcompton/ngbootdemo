import { Component } from '@angular/core';
import { Message} from "./message";
import {MessagesService} from "./messages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngbootdemoui';
  message: Message | undefined;

  constructor(private messagesService: MessagesService) {
    messagesService.getMessage().subscribe(message => this.message = message);
  }
}
