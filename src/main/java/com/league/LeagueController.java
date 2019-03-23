package com.league;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PostMapping("/addplayers")
    public List<Player> addPlayer( @RequestBody Player player) {
        return leagueService.addPlayer(player);
    }

    @PostMapping("/addteam")
    public List<Team> addTeam(  @RequestBody Team team) {
        return leagueService.addTeam(team);
    }

    @RequestMapping("/scorecalc")
    public List<Player> updateScore(int teamId,String status) {
        return leagueService.updateScore(teamId,status);
    }

}