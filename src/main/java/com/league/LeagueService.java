package com.league;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

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
        return leagueData.addPlayer(p);
    }

    public List<Team> addTeam(Team t) {
        return leagueData.addTeam(t);
    }

    public List<Player> updateScore(int teamId, String status) {
        getAllPlayers().parallelStream().forEach(p->{
            Optional<Team> teamOpt = getAllTeams().parallelStream().filter(t ->  teamId == t.getTeamId()).findFirst();
            if(teamOpt.isPresent()) {
                Team team = teamOpt.get();
                AtomicInteger score = new AtomicInteger(p.getScore());
                if ("win".equalsIgnoreCase(status)) {
                        score.set(score.get() + team.getWin());
                    } else if ("lose".equalsIgnoreCase(status)) {
                        score.set(score.get() - team.getLose());
                    } else if ("bonus".equalsIgnoreCase(status)) {
                        score.set(score.get() + team.getBonus());
                    } else {
                        score=score;
                    }
                p.setScore(score.get());
            }
        });
        return getAllPlayers();
    }
}
