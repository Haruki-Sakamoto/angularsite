import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { JankenComponent } from './janken/janken.component';
import { OmikujiComponent } from './omikuji/omikuji.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'', component:TopComponent},
    {path:'portfolio', component:PortfolioComponent},
    {path:'contact', component:ContactComponent},
    {path:'omikuji', component:OmikujiComponent},
    {path:'janken', component:JankenComponent}
  ]
  )
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
