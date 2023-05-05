import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArticleModel } from './article.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  api = environment.api + 'article/';
  private artcleList$$: BehaviorSubject<ArticleModel[]> = new BehaviorSubject<ArticleModel[]>([]);

  constructor(private http: HttpClient) { this.load(); }


  // articles
  getArticles() {
    return this.artcleList$$.asObservable();
  }


  load() {
    this.http
      .get<ArticleModel[]>(this.api)
      .subscribe((res: ArticleModel[]) => this.artcleList$$.next(res));
  }


  searchByText(searchText: string) {
    this.http
        .get<ArticleModel[]>(this.api + 'search?search=' + searchText)
        .subscribe((res) => this.artcleList$$.next(res));
  }


  // filters
  searchByFilter(data: any) {
    this.http
        .post<ArticleModel[]>(this.api + 'search', data)
        .subscribe((res) => this.artcleList$$.next(res));
  }

}
