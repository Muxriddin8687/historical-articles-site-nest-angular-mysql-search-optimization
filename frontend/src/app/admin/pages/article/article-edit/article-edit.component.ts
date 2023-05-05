import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Editor, Toolbar } from 'ngx-editor';
import { FilterModel } from 'src/app/main/components/filter/filter.model';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent {
  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);


  id: any = this.route.snapshot.paramMap.get('id') || 0;
  api = environment.api;

  category_id = 0;
  group_id = 0;
  area_id = 0;
  author_id = 0;
  title = '';
  descriptions = '';
  text = '';
  years = '';


  category: FilterModel[] = [];
  group: FilterModel[] = [];
  area: FilterModel[] = [];
  author: FilterModel[] = [];

  // editor propertys 
  content: any;
  editor!: Editor;
  editorToolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];


  load() {
    this.http.get(this.api + 'category').subscribe((res: any) => this.category = res);
    this.http.get(this.api + 'group').subscribe((res: any) => this.group = res);
    this.http.get(this.api + 'area').subscribe((res: any) => this.area = res);
    this.http.get(this.api + 'author').subscribe((res: any) => this.author = res);
  }


  ngOnInit(): void {
    if (parseInt(this.id) > 0)
      this.http.get(this.api + 'article/' + this.id).subscribe((res: any) => {
        this.category_id = res[0]['category_id'];
        this.group_id = res[0]['group_id'];
        this.author_id = res[0]['author_id'];
        this.area_id = res[0]['area_id'];
        this.title = res[0]['title'];
        this.descriptions = res[0]['descriptions'];
        this.years = res[0]['years'];
        this.text = res[0]['text'];
      });

    this.load();
    this.editor = new Editor({
      keyboardShortcuts: true,
    });
  }


  update(form: NgForm) {
    if(this.id == null || this.id == 0)
      this.http.post(this.api + 'article', form.value).subscribe();
    else
      this.http.patch(this.api + 'article/' + this.id, form.value).subscribe();

    this.router.navigateByUrl('/admin/article');
    form.reset();
  }
}


export interface ArticleTdo {
  id: number,
  category_id: number,
  group_id: number,
  area_id: number,
  author_id: number,
  title: string,
  descriptions: string,
  text: string,
  years: string,
  date: string
}