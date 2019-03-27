import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

team:string[];

  constructor(
      private httpClientService:HttpClientService
    ) { }

  ngOnInit() {
      this.httpClientService.getTeam().subscribe(
       response =>this.handleSuccessfulResponse(response),
      );
  }

  handleSuccessfulResponse(response)
  {
  
  this.team=response;
  }

}
