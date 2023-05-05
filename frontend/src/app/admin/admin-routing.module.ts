import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticleEditComponent } from './pages/article/article-edit/article-edit.component';
import { CategoryComponent } from './pages/category/category.component';
import { GroupComponent } from './pages/group/group.component';
import { AreaComponent } from './pages/area/area.component';
import { AuthorComponent } from './pages/author/author.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'article', component: ArticleComponent },
      { path: 'article/:id', component: ArticleEditComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'group', component: GroupComponent },
      { path: 'area', component: AreaComponent },
      { path: 'author', component: AuthorComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
