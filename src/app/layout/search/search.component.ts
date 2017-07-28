import { Component } from '@angular/core';
import { OarApiService } from '../../shared/services/oar-api/oar-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { SearchService } from '../../shared/services/search/search.service';

@Component({
  moduleId: module.id,
  selector: 'search-page',
  templateUrl: './search.html',
  styleUrls: ['./search.component.scss'],
  providers: [OarApiService]
})

export class SearchComponent {

  search: string;
  json: string = '';
  jobList: any[] = [];

  selectedValue = 'Id';
  options: string[] = ['Id']; // ['Name', 'Id', 'Date']

  constructor(private apiService: OarApiService,
    private router: Router,
    private http: Http,
    private searchService: SearchService,
    private route: ActivatedRoute) {


    this.route.params.subscribe(params => {
      console.log(params);
      this.search = params['strSearch'];
    });
  }

  searchRequestByName(name: string): void {

    this.searchService.searchByName(name).subscribe(
      (res: any) => this.jobList = res.items,
        err => this.jobList = []
    );
  }

  searchSubmit() {
    switch (this.selectedValue) {
      case 'Id':
        this.gotoJob(this.search);
        break;
      case 'Name':
        this.searchRequestByName(this.search);
        break;
      case 'Date':
        this.searchRequestByName(this.search);
        break;
    }
  }


  gotoJob(id: string) {
    this.router.navigate(['jobs/' + id]);
  }

}
