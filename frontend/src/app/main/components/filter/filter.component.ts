import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, filter, fromEvent, pluck, tap } from 'rxjs';
import { NgForm } from '@angular/forms';
import { FilterModel } from './filter.model';
import { environment } from 'src/environments/environments';
import { SearchService } from '../../core/search.service';
import { GetDataService } from '../../core/get-data.service';
declare let MultiselectDropdown: any;
declare let window: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  getData = inject(GetDataService);
  searchService = inject(SearchService);
  api = environment.api;

  @ViewChild('searchText') searchInput!: ElementRef;

  categoryList$ = new Observable<FilterModel[]>();
  groupList$ = new Observable<FilterModel[]>();
  areaList$ = new Observable<FilterModel[]>();
  authorList$ = new Observable<FilterModel[]>();


  load() {
    this.categoryList$ = this.getData.categoryList();
    this.groupList$ = this.getData.groupList();
    this.areaList$ = this.getData.areaList();
    this.authorList$ = this.getData.authorList();
  }


  ngOnInit(): void {
    this.load();
  }


  ngAfterViewInit(): void {

    setTimeout(() => MultiselectDropdown(window.MultiselectDropdownOptions), 1000);


    fromEvent(this.searchInput!.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        pluck('target', 'value'),
        distinctUntilChanged(),
        filter((val: any) => {
          if (`${val}`.trim().length > 4) {
            return true;
          } else {
            this.searchService.load();
            return false;
          }
        }),
        tap(val => val),
      )
      .subscribe(res => {
        this.searchService.searchByText(res);
      });
  }


  filter(form: NgForm) {
    this.searchService.searchByFilter(form.value);
  }
}

