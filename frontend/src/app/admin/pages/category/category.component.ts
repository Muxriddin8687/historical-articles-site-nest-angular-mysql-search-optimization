import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilterModel } from 'src/app/main/components/filter/filter.model';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  http = inject(HttpClient);

  api = environment.api + 'category';
  filter: FilterModel[] = [];

  id: number = 0;
  name: string = '';


  load() {
    this.http.get(this.api).subscribe((res: any) => this.filter = res);
  }


  ngOnInit(): void {
    this.load()
  }


  changeFilter(id: number) {
    let changeFilter = this.filter.filter((item: any) => item.id == id);
    this.id = changeFilter[0]['id'];
    this.name = changeFilter[0]['name'];
  }


  update(form: NgForm) {
    if(form.value.id == null)
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
