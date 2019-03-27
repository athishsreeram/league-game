package com.league;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LeagueController {

    @Autowired
    LeagueService leagueService;

    @RequestMapping("/ping")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping("/players")
    public List<Player> getAllPlayers() {
        List<Player> out = leagueService.getAllPlayers().stream().sorted(Comparator.comparing(Player::getScore).reversed()).collect(Collectors.toList());
        return out;
    }

    @RequestMapping("/team")
    public List<Team> getAllTeam() {
        return leagueService.getAllTeams();
    }

    @PostMapping("/addplayers")
    public List<Player> addPlayer( @RequestBody Player player) {
       int playId = leagueService.getAllPlayers().stream().mapToInt(v -> v.getPlayId())
                .max().orElse(0);
       player.setPlayId(playId + 1);
       return leagueService.addPlayer(player);
    }

    @PostMapping("/updateplayers")
    public List<Player> updatePlayer( @RequestBody Player player) {
        return leagueService.addPlayer(player);
    }

    @PostMapping("/addteam")
    public List<Team> addTeam(  @RequestBody Team team) {

        Optional<Team> teamExist = leagueService.getAllTeams().stream().filter(v -> v.getName().equalsIgnoreCase(team.getName())).findFirst();

        int teamId = leagueService.getAllTeams().stream().mapToInt(v -> v.getTeamId())
                .max().orElse(0);
        if( !teamExist.isPresent() )
            team.setTeamId(teamId + 1);
        else
            team.setTeamId(teamExist.get().getTeamId());

        return leagueService.addTeam(team);
    }

    @PostMapping("/scorecalc")
    public void updateScore(@RequestBody  Scorer scorer) {
         leagueService.updateScore(scorer);
    }

}