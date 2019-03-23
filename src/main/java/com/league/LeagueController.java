package com.league;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LeagueController {

    @Autowired
    LeagueService leagueService;

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping("/players")
    public List<Player> getAllPlayers() {
        return leagueService.getAllPlayers();
    }

    @RequestMapping("/team")
    public List<Team> getAllTeam() {
        return leagueService.getAllTeams();
    }

    @RequestMapping("/scorecalc")
    public List<Team> updateScore(int teamId,String status) {
        return leagueService.updateScore(teamId,status);
    }

}