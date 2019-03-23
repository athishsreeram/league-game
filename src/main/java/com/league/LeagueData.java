package com.league;


import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
public class LeagueData {

    List<Team> teamLst = new ArrayList<>();
    List<Player> playersLst = new ArrayList<>();

    public List<Team> getAllTeams() {
      return teamLst;
    }

    public List<Team> addTeam(Team t){
        teamLst.add(t);
        return teamLst;
    }

    public List<Player> getAllPlayer(){
        return playersLst;
    }

    public List<Player> addPlayer(Player p){
        playersLst.add(p);
        return playersLst;
    }
}