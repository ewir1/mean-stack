import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PeopleComponent } from './components/people/people.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'person', component: PeopleComponent},
  { path: 'edit-person/:id', component: EditPersonComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
