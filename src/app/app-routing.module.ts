import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComonent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
        { path: 'dashboard',  component: 'DashboardComponent' }, 
        { path: 'detail/:id', component: 'HeroDetailComponent' }, 
        { path: 'heroes',     component: 'HeroesComonent' }
    ];
    
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}