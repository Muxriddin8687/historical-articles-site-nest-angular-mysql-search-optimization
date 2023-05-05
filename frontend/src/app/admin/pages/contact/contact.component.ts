import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  http = inject(HttpClient);
  api = environment.api + "about";

  phone: string = '';
  email: string = '';
  text: string = '';
  telegram: string = '';


  load() {
    this.http.get(this.api).subscribe((res: any) => {
      this.phone = res[0]["phone"];
      this.email = res[0]["email"];
      this.text = res[0]["text"];
      this.telegram = res[0]["telegram"];
    });
  }


  save(form: NgForm) {
    this.http.post(this.api, form.value).subscribe((res) => {
      this.load();
    });
  }

  ngOnInit(): void {
    this.load();
  }
}
