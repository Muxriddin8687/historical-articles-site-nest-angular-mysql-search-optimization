import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SearchService } from '../../core/search.service';
import { ArticleModel } from '../../core/article.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  serchService = inject(SearchService);

  articleList$: Observable<ArticleModel[]> = new Observable<ArticleModel[]>();

  ngOnInit(): void {
    this.articleList$ = this.serchService.getArticles();
  }

}
