package com.league;


import org.dizitart.no2.Document;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.NitriteCollection;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

import static org.dizitart.no2.Document.createDocument;
import static org.dizitart.no2.objects.filters.ObjectFilters.eq;


@Component
public class LeagueData {

    Nitrite db = null;

    @PostConstruct
    public void creatDB(){
        //  initialization
        db = Nitrite.builder()
                .compressed()
                .filePath(System.getProperty("user.dir") + "/test.db")
                .openOrCreate("user", "user");


    }


    public List<Team> getAllTeams() {

        // Create a Nitrite Collection
        NitriteCollection collection = db.getCollection("test");
        // Create an Object Repository
        ObjectRepository<Team> repository = db.getRepository("team", Team.class);

        List<Team> teamLst = repository.find().toList();


      return teamLst;
    }

    public List<Team> addTeam(Team t){


        // Create an Object Repository with a key
        ObjectRepository<Team> repository = db.getRepository("team", Team.class);

        // insert the document
        repository.insert(t);

        List<Team> teamLst = repository.find().toList();

        return teamLst;
    }

    public List<Player> getAllPlayer(){
        // Create a Nitrite Collection
        NitriteCollection collection = db.getCollection("test");
        // Create an Object Repository
        ObjectRepository<Player> repository = db.getRepository("player", Player.class);

        List<Player> playersLst = repository.find().toList();

        return  playersLst;
    }

    public void addPlayer(Player p){


        // Create a Nitrite Collection
        NitriteCollection collection = db.getCollection("test");
        // Create an Object Repository
        ObjectRepository<Player> repository = db.getRepository("player", Player.class);

        // insert the document
        repository.insert(p);

        List<Player> playersLst = repository.find().toList();


    }

    public void updatePlayer(Player p){

        // Create a Nitrite Collection
        NitriteCollection collection = db.getCollection("test");
        // Create an Object Repository
        ObjectRepository<Player> repository = db.getRepository("player", Player.class);

        // create a document to populate data
        Document doc = createDocument("playId", p.getPlayId())
                .put("playerName", p.getPlayerName())
                .put("email", p.getEmail())
                .put("score", p.getScore())
                .put("teamLst", p.getTeamLst());

        // update the document
        repository.update(eq("email",p.getEmail()), doc);


    }

    public void updateTeam(Team t) {

        // Create a Nitrite Collection
        NitriteCollection collection = db.getCollection("test");
        // Create an Object Repository
        ObjectRepository<Team> repository = db.getRepository("team", Team.class);

        // create a document to populate data
        Document doc = createDocument("teamId", t.getTeamId())
                .put("name",t.getName())
                .put("win", t.getWin())
                .put("lose", t.getLose())
                .put("bonus", t.getBonus())
                .put("draw", t.getDraw());

        // update the document
        repository.update(eq("name",t.getName()), doc);
    }
}