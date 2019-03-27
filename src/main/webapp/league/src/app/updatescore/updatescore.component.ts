import { Component, OnInit } from '@angular/core';
import { HttpClientService, Scorer } from '../service/http-client.service';

@Component({
  selector: 'app-updatescore',
  templateUrl: './updatescore.component.html',
  styleUrls: ['./updatescore.component.css']
})
export class UpdatescoreComponent implements OnInit {

 scorer: Scorer = new Scorer("","");
 display: String = "false";
 pass: String = "";

  constructor(
         private httpClientService:HttpClientService
       ) { }

  ngOnInit() {
  }

  updateScore(): void {


        this.httpClientService.updateScore(this.scorer)
            .subscribe( data => {
              alert("Score Updated successfully.");
            });
   }

    check(): void {
    if(this.pass == "xbox"){
		this.display = "true";
	}else{
		this.display = "false";
	}

  };
}
