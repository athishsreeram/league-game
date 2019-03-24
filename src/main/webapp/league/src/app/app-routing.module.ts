import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { AddteamComponent } from './addteam/addteam.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { LeaderComponent } from './leader/leader.component';
import { UpdatescoreComponent } from './updatescore/updatescore.component';


const routes: Routes = [
  { path:'viewTeam', component: TeamComponent},
  { path:'addTeam', component: AddteamComponent},
  { path:'addPlayer', component: AddPlayerComponent},
  { path:'updateScore', component: UpdatescoreComponent},
  { path:'', component: LeaderComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
