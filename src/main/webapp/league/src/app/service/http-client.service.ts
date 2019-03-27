import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Team{
  constructor(
    public teamId:string,
    public name:string,
    public win:string,
    public lose:string,
    public bonus:string,
    public draw:string
  ) {}
}

export class Player{
  constructor(
    public playId:string,
    public playerName:string,
    public email:string,
    public score:string,
    public teamLst:string[]
  ) {}
}

export class Scorer{
  constructor(
    public teamId:string,
    public status:string
     ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

    getTeam()
    {
      return this.httpClient.get<Team[]>('http://league-ipl.herokuapp.com/team');
    }

    getPlayer()
    {
      return this.httpClient.get<Player[]>('http://league-ipl.herokuapp.com/players');
    }

    public createTeam(team) {
        return this.httpClient.post<Team>("http://league-ipl.herokuapp.com/addteam", team);
    }

    public createPlayer(player) {
            
            return this.httpClient.post<Player>("http://league-ipl.herokuapp.com/addplayers", player);
    }

    public updateScore(scorer) {
               
                return this.httpClient.post<Scorer>("http://league-ipl.herokuapp.com/scorecalc", scorer);
    }
}
