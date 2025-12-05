import { Component } from '@angular/core';
import { MessageService } from '../message';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.html',
  styleUrls: ['./messages.css'],
  imports: [NgFor, NgIf]
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
