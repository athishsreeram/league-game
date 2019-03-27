import { Component, OnInit } from '@angular/core';
import {OrderListModule} from 'primeng/orderlist';
import { HttpClientService, Player,Team } from '../service/http-client.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  team: Team[]  = [];
  teamTgt: Team[]  = [];
  player: Player = new Player("","","","",[]);
  disablePl:Boolean  = false; 

 constructor(
       private httpClientService:HttpClientService
     ) { }

   ngOnInit() {

   this.disablePl  = false;

   this.httpClientService.getTeam().subscribe(
          response =>this.handleSuccessfulResponse(response),
         );


   }

  createPlayer(): void {


      if(this.teamTgt.length == 4){

      var i;
          for (i = 0; i < this.teamTgt.length; i++) {
                  this.player.teamLst.push(this.teamTgt[i].teamId);
              }

        this.httpClientService.createPlayer(this.player)
            .subscribe( data => {
              alert("Team created successfully.");
            });
       }

    };

    handleSuccessfulResponse(response)
      {
          this.team=response;
      }

      addTeamTrgt(event: any) {
         var target = event.items;

         if(this.teamTgt.length == 4)
         {
              this.disablePl = true;
          }else if(this.teamTgt.length > 4)
          {

            this.team =  this.teamTgt;
            this.teamTgt = [];

          }

      }


}
