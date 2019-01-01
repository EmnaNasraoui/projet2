import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EditComponent } from './edit/edit.component';
import { LogInComponent } from './log-in/log-in.component';
import { BookNowComponent } from './book-now/book-now.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TestComponent },
  { path: 'edit', component: EditComponent },
  { path: 'login', component: LogInComponent },
  { path: 'Booknow', component: BookNowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
