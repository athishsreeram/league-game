import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Team{
  constructor(
    public teamId:string,
    public name:string,
    public win:string,
    public lose:string,
    public bonus:string,
    public draw:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getTeam()
    {
      console.log("test call");
      return this.httpClient.get<Team[]>('http://localhost:8082/team');
    }
}
