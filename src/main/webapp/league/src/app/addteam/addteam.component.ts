import { Component, OnInit } from '@angular/core';
import { HttpClientService, Team } from '../service/http-client.service';


@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css'],
  "styles": [
    "../node_modules/primeicons/primeicons.css",
    "../node_modules/primeng/resources/themes/nova-light/theme.css",
    "../node_modules/primeng/resources/primeng.min.css"
  ]
})
export class AddteamComponent implements OnInit {

 team: Team = new Team("","","","","","");

   constructor(
     private httpClientService: HttpClientService
   ) { }


  ngOnInit() {
  }

createTeam(): void {
    this.httpClientService.createTeam(this.team)
        .subscribe( data => {
          alert("Team created successfully.");
        });

  };

}
