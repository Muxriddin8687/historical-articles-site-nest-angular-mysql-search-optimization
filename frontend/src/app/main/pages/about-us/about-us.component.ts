import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GetDataService } from '../../core/get-data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent {
  getData = inject(GetDataService);
  about = [];

  ngOnInit(): void {
    this.getData.about().subscribe(res => this.about = res);
  }

}
