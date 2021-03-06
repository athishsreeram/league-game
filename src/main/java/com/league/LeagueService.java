package com.league;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
public class LeagueService {

    @Autowired
    LeagueData leagueData;


    public List<Player> getAllPlayers() {
        return leagueData.getAllPlayer();
    }

    public List<Team> getAllTeams() {
        return leagueData.getAllTeams();
    }

    public List<Player> addPlayer(Player p) {

        if( leagueData.getAllPlayer().stream().filter(p1->
            p1.getEmail().equalsIgnoreCase(p.getEmail())
        ).findFirst().isPresent()){
            leagueData.updatePlayer(p);
         }else{
           leagueData.addPlayer(p);
       }


        return getAllPlayers();
    }

    public List<Team> addTeam(Team t) {

        if( leagueData.getAllTeams().stream().filter(t1->
                (t.getTeamId() == t1.getTeamId())
        ).findFirst().isPresent()){

            leagueData.updateTeam(t);
        }else{
            leagueData.addTeam(t);
        }


        return getAllTeams();
}
    public void updateScore(Scorer scorer) {

        int teamId = scorer.getTeamId();
        String status = scorer.getStatus();

       List<Player> players =   getAllPlayers();

        players.stream().forEach(p->{
            Optional<Team> teamOpt = getAllTeams().stream().filter(t ->  teamId == t.getTeamId()).findFirst();

            if(teamOpt.isPresent() && p.getTeamLst().contains(teamId)) {
                Team team = teamOpt.get();
                int score = p.getScore();
                if ("win".equalsIgnoreCase(status)) {
                     score = score+ team.getWin();
                    } else if ("lose".equalsIgnoreCase(status)) {
                    score = score - team.getLose();
                    } else if ("draw".equalsIgnoreCase(status)) {
                    score = score+ team.getDraw();
                    } else if ("bonus".equalsIgnoreCase(status)) {
                    score = score+ team.getBonus();
                    } else {
                        score=score;
                    }
                    p.setScore(score);
            }
        });






    }
}
