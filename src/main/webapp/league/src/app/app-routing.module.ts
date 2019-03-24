import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { AddteamComponent } from './addteam/addteam.component';
import { AddPlayerComponent } from './add-player/add-player.component';


const routes: Routes = [
  { path:'', component: TeamComponent},
  { path:'addTeam', component: AddteamComponent},
  { path:'addPlayer', component: AddPlayerComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
