import {Component} from '@angular/core';
import {OarApiService} from '../../shared/oar-api/oar-api.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'search-page',
  templateUrl: './search.html',
  providers: [OarApiService]
})

export class SearchComponent {

  search: string;

  constructor(private apiService: OarApiService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.search = params['strSearch'];
      console.log(this.search);
    })
  }

}
