import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GetDataService } from '../../core/get-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  getData = inject(GetDataService);
  date = new Date;
  about: any;

  ngOnInit(): void {
    this.getData.about().subscribe(res => this.about = res);
  }
}
