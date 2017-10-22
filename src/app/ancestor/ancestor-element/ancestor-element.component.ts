import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ancestor } from '../../helper/models/ancestor.model';
import { API_SERVER } from '../../helper/constants';
import { AncestorService } from '../../helper/ancestor.service';

@Component({
  selector: 'app-ancestor-element',
  templateUrl: './ancestor-element.component.html',
  styleUrls: ['./ancestor-element.component.scss']
})
export class AncestorElementComponent implements OnInit, OnDestroy {
  @Input() ancestorInput: Ancestor;
  public subToGetAncestor;
  public subToParams;
  public subToQueryParams;
  public id: number;
  public param: string;
  public ancestor: Ancestor;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ancestorService: AncestorService
  ) { }

  ngOnInit() {

    if (!this.ancestorInput) {
      this.subToGetAncestor = this.route.data.subscribe((data: any) => {
        this.ancestor = null;
        setTimeout(() => {
          this.ancestor = <Ancestor>data.ancestor;
        }, 0);
      });
    } else {
      this.ancestor = this.ancestorInput;
    }

    this.subToParams = this.route.params.subscribe(params => {
      params && params['id'] ?
        this.id = +params['id'] : this.router.navigate(['/']);
    });
    this.subToQueryParams = this.route.queryParams.subscribe(param => {
      param && param['option'] ?
        this.param = param['option'] : this.param = null;
    });
  }

  refreshAncestor() {
    if (this.id) {
      this.ancestorService.getAncestor(this.id).subscribe(ancestor => {
        if (ancestor instanceof Ancestor) {
          this.ancestor = ancestor;
        } else {
          this.router.navigate(['/']);
        }
      }, error => {
        // TODO: add toast service to show that ancestor was not found
        this.router.navigate(['/']);
      });
    }
  }

  goTo(id: number, param?: string) {
    if (param && param === 'details') return this.router.navigate(['/user/profile', id]);

    param ?
      this.router.navigate(['/ancestor', id], {queryParams: {option: param}})
    :
      this.router.navigate(['/ancestor', id]);
  }

  getAvatar(avatar: string) {
    if (avatar.indexOf('http') > -1) {
      return avatar;
    } else {
      return API_SERVER + avatar;
    }
  }

  ngOnDestroy() {
    if (this.subToGetAncestor) {
      this.subToGetAncestor.unsubscribe();
    }
    this.subToParams.unsubscribe();
    this.subToQueryParams.unsubscribe();
  }
}
