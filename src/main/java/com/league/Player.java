package com.league;

import java.util.List;

public class Player {

    public int playId;
    public String playerName;
    public String email;
    public int score;
    public List<Integer> teamLst;



    public int getPlayId() {
        return playId;
    }

    public void setPlayId(int playId) {
        this.playId = playId;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public List<Integer> getTeamLst() {
        return teamLst;
    }

    public void setTeamLst(List<Integer> teamLst) {
        this.teamLst = teamLst;
    }
}
