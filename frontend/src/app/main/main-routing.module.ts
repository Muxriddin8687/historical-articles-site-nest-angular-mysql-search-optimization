import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'article', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'article/:id', component: ArticleDetailsComponent },

      { path: '', redirectTo: 'article', pathMatch: 'full' },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
