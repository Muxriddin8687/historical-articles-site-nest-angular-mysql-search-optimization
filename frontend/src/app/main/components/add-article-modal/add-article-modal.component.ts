import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-add-article-modal',
  templateUrl: './add-article-modal.component.html',
  styleUrls: ['./add-article-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddArticleModalComponent {
  http = inject(HttpClient);
  api = environment.api;

  articleForm = new FormData;
  success: boolean = false;
  error: boolean = false;


  changeFile(event: any) {
    this.articleForm.append('file', event.target.files[0], event.target.files[0].name);
  }


  save(form: NgForm) {
    this.articleForm.append('name', form.value.name);
    this.articleForm.append('email', form.value.email);
    this.articleForm.append('phone', form.value.phone);
    this.http.post(this.api + 'message', this.articleForm).subscribe(
      res => {
        this.error = false;
        this.success = true;
        form.reset();
      },
      err => {
        this.success = false
        this.error = true;
      }
    )
  }
}

