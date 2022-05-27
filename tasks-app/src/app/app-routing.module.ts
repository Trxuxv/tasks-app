import { TasksComponent } from './pages/tasks/tasks.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'tasks', component: TasksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
