import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  http = inject(HttpClient);

  api = environment.api + 'author';
  author: any[] = [];

  id: number = 0;
  name: string = '';
  email: string = '';
  phone: string = '';


  load() {
    this.http.get(this.api).subscribe((res: any) => this.author = res);
  }


  ngOnInit(): void {
    this.load()
  }


  changeAuthor(id: number) {
    let changeAuthor = this.author.filter((item: any) => item.id == id);
    this.id = changeAuthor[0]['id'];
    this.name = changeAuthor[0]['name'];
    this.email = changeAuthor[0]['email'];
    this.phone = changeAuthor[0]['phone'];
  }


  update(form: NgForm) {
    if(form.value.id == null || form.value.id == 0)
      this.http.post(this.api, form.value).subscribe((res) => {
        this.load();
        form.reset();
      });
    else
      this.http.patch(this.api + '/' + form.value.id, form.value).subscribe((res) => {
        this.load();
        form.reset();
      });
  }


  delete(id: number) {
    this.http.delete(this.api + '/' + id).subscribe(() => this.load());
  }
}
