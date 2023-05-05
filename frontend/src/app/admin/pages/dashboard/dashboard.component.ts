import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  http = inject(HttpClient);
  api = environment.api + 'message';

  message: any;

  load() {
    this.http.get(this.api).subscribe(res => this.message = res);
  }

  delete(id: number, filename: string) {
    this.http.delete(this.api + '/' + id + '?fileName=' + filename).subscribe(() => this.load());
  }

  ngOnInit(): void {
    this.load();
  }

}
