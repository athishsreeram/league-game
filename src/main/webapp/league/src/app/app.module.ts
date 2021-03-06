import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { HttpClientModule } from '@angular/common/http';
import { AddteamComponent } from './addteam/addteam.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import {OrderListModule} from 'primeng/orderlist';
import {TableModule} from 'primeng/table';
import {PickListModule} from 'primeng/picklist';
import { LeaderComponent } from './leader/leader.component';
import { UpdatescoreComponent } from './updatescore/updatescore.component';



@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    AddteamComponent,
    HeaderComponent,
    FooterComponent,
    AddPlayerComponent,
    LeaderComponent,
    UpdatescoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule,
     OrderListModule,
     TableModule,
     PickListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
