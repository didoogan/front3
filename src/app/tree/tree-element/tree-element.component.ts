import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ancestor } from '../../helper/models/ancestor.model';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-tree-element',
  templateUrl: './tree-element.component.html',
  styleUrls: ['./tree-element.component.scss']
})
export class TreeElementComponent implements OnInit, OnDestroy {

  private subToGetAncestor;
  private subToParams;
  private subToQueryParams;
  private id: number;
  private param: string;
  private ancestor: Ancestor;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private treeService: TreeService
  ) { }

  ngOnInit() {
    this.subToGetAncestor = this.route.data.subscribe((data: any) => {
      this.ancestor = <Ancestor>data.ancestor;

      this.subToParams = this.route.params.subscribe(params => {
        params && params['id'] ?
          this.id = +params['id'] : this.router.navigate(['/']);
      });
      this.subToQueryParams = this.route.queryParams.subscribe(param => {
        param && param['option'] ?
          this.param = param['option'] : this.param = null;
      });
    });
  }

  refreshAncestor() {
    if (this.id) {
      this.treeService.getAncestor(this.id).subscribe(ancestor => {
        if (ancestor instanceof Ancestor) {
          return ancestor;
        } else {
          this.router.navigate(['/']);
        }
      }, error => {
        // TODO: add toast service to show that ancestor was not found
        this.router.navigate(['/']);
      });
    }
  }

  goTo(param?: string) {
    param ?
      this.router.navigate(['/tree', this.id], {queryParams: {option: param}})
    :
      this.router.navigate(['/tree', this.id]);
  }

  ngOnDestroy() {
    this.subToGetAncestor.unsubscribe();
    this.subToParams.unsubscribe();
    this.subToQueryParams.unsubscribe();
  }
}
