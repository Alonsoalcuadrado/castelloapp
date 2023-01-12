import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './pages/information/information.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'informacion',
    component: InformationComponent,
    pathMatch: 'full',
  },
  {
    path: 'noticias',
    component: NewsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
