import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import getTickets from './tickets.json';

interface Tickets{
ticketId: String;
subject: String;
date: String;
from: String;
status: String;
body: String;

}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(){}

  ticket: Tickets[]=getTickets;

  
  

  ngOnInit(): void {

    console.log(getTickets);
  }

  


}
