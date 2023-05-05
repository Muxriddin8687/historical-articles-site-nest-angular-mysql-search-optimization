import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  http = inject(HttpClient);

  api = environment.api + 'article';
  article: any[] = [];


  load() {
    this.http.get(this.api).subscribe((res: any) => this.article = res);
  }


  ngOnInit(): void {
    this.load()
  }


  delete(id: number) {
    this.http.delete(this.api + '/' + id).subscribe(() => this.load());
  }
}