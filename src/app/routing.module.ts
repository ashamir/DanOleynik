import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PersonCardComponent} from './components/person-card/person-card.component';
import {PersonDetailsResolver} from './services/person-details-resolver';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent ,
    children: [
      {path: 'person/:id',
       component: PersonCardComponent,
       resolve: {
          personInfo: PersonDetailsResolver
       }
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    PersonDetailsResolver
  ]
})
export class RoutingModule { }
