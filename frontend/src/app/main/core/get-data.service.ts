import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environments';
import { FilterModel } from '../components/filter/filter.model';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private http = inject(HttpClient);
  private api = environment.api;

  private readonly categoryList$$ = new BehaviorSubject<FilterModel[]>([]);
  private readonly groupList$$ = new BehaviorSubject<FilterModel[]>([]);
  private readonly areaList$$ = new BehaviorSubject<FilterModel[]>([]);
  private readonly authorList$$ = new BehaviorSubject<FilterModel[]>([]);
  private readonly about$$ = new BehaviorSubject([]);


  constructor() { this.load(); }

  private load() {
    this.http.get<FilterModel[]>(this.api + 'category').subscribe((res: FilterModel[]) => this.categoryList$$.next(res));
    this.http.get<FilterModel[]>(this.api + 'group').subscribe((res: FilterModel[]) => this.groupList$$.next(res));
    this.http.get<FilterModel[]>(this.api + 'area').subscribe((res: FilterModel[]) => this.areaList$$.next(res));
    this.http.get<FilterModel[]>(this.api + 'author').subscribe((res: FilterModel[]) => this.authorList$$.next(res));
    this.http.get(this.api + 'about').subscribe((res: any) => this.about$$.next(res));
  }

  about() {
    return this.about$$.asObservable();
  }

  categoryList() {
    return this.categoryList$$.asObservable();
  }

  groupList() {
    return this.groupList$$.asObservable();
  }

  areaList() {
    return this.areaList$$.asObservable();
  }

  authorList() {
    return this.authorList$$.asObservable();
  }

}
