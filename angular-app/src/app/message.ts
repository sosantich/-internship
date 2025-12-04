import { Component } from '@angular/core';
import { MessageService } from './message.spec';

@Component({
  selector: 'app-messages',
  templateUrl: './message.html',
  styleUrls: ['./message.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}