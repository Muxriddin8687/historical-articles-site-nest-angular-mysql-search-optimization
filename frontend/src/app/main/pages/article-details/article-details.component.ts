import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleModel } from '../../core/article.model';
import { SearchService } from '../../core/search.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailsComponent {
  route = inject(ActivatedRoute);
  articleService = inject(SearchService);


  id = this.route.snapshot.paramMap.get('id') || '';
  article: ArticleModel[] = [];


  ngOnInit(): void {
    this.articleService
        .getArticles()
        .pipe(
          map(item =>
            item.filter(
              (article: ArticleModel) => 
                article.id == parseInt(this.id)
              )
            )
        )
        .subscribe(res => this.article = res);
  }
}
