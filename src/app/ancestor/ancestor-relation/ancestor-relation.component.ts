import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ancestor } from '../../helper/models/ancestor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AncestorService } from '../../helper/ancestor.service';

@Component({
  selector: 'app-ancestor-relation',
  templateUrl: './ancestor-relation.component.html',
  styleUrls: ['./ancestor-relation.component.scss']
})
export class AncestorRelationComponent implements OnInit, OnDestroy {
  @Input() ancestorsIds: number[];
  @Input() relationTo: number;
  private subToParams;
  private ancestors: Ancestor[] = [];
  private id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ancestorService: AncestorService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] ? +this.route.snapshot.params['id'] : 0;
    this.subToParams = this.route.params.subscribe(params => {
      params && params['id'] ?
        this.id = +params['id'] : this.router.navigate(['/']);
    });

    if (this.ancestorsIds && this.ancestorsIds.length > 0 && this.relationTo && this.relationTo === this.id) {
      this.ancestorService.getAncestors(this.ancestorsIds).subscribe((ancestors: Ancestor[]) => {
        this.ancestors = ancestors;
      });
    }
  }

  ngOnDestroy() {
    this.subToParams.unsubscribe();
  }
}
