import { Component, OnInit } from '@angular/core';

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
      this.httpClientService.getEmployee().subscribe(
       response =>this.handleSuccessfulResponse(response),
      );
  }

  handleSuccessfulResponse(response)
  {
      this.team=response;
  }

}
