import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tree-element',
  templateUrl: './tree-element.component.html',
  styleUrls: ['./tree-element.component.scss']
})
export class TreeElementComponent implements OnInit, OnDestroy {

  private subToParams;
  private subToQueryParams;
  private id: number;
  private param: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subToParams = this.route.params.subscribe(params => {
      params && params['id'] ?
        this.id = +params['id'] : this.router.navigate(['/']);
    });
    this.subToQueryParams = this.route.queryParams.subscribe(param => {
      param && param['option'] ?
        this.param = param['option'] : this.param = null;
    });
  }

  goTo(param?: string) {
    param ?
      this.router.navigate(['/tree', this.id], {queryParams: {option: param}})
    :
      this.router.navigate(['/tree', this.id]);
  }

  ngOnDestroy() {
    this.subToParams.unsubscribe();
    this.subToQueryParams.unsubscribe();
  }
}
