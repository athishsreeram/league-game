import { Component, OnInit } from '@angular/core';
import { HttpClientService,Player } from '../service/http-client.service';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent implements OnInit {

  player:string[];
  team:string[];

   constructor(
       private httpClientService:HttpClientService
   ) { }

   ngOnInit() {
       this.httpClientService.getTeam().subscribe(
          response =>this.handleSuccessfulResponseTeam(response),
         );

       this.httpClientService.getPlayer().subscribe(
        response =>this.handleSuccessfulResponse(response),
       );
   }

    handleSuccessfulResponseTeam(response)
    {
      console.log(response);
      this.team=response;
    }

   handleSuccessfulResponse(response)
   {
     console.log(response);
     this.player=response;
   }

}
