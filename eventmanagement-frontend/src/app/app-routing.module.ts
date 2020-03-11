import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDisplayComponent } from './event-display/event-display.component';
import { LoginDetailsComponent } from './login-details/login-details.component';


const eventRoutes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(eventRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
