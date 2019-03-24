import { Component, OnInit } from '@angular/core';
import {OrderListModule} from 'primeng/orderlist';
import { HttpClientService, Player,Team } from '../service/http-client.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  team: Team[];
  player: Player = new Player("","","","",[]);

 constructor(
       private httpClientService:HttpClientService
     ) { }

   ngOnInit() {

   this.httpClientService.getTeam().subscribe(
          response =>this.handleSuccessfulResponse(response),
         );


   }

  createPlayer(): void {
      this.httpClientService.createPlayer(this.player)
          .subscribe( data => {
            alert("Team created successfully.");
          });

    };

    handleSuccessfulResponse(response)
      {
      console.log(response);
          this.team=response;
      }

}
