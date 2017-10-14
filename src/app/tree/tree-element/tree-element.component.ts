import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-tree-element',
  templateUrl: './tree-element.component.html',
  styleUrls: ['./tree-element.component.scss']
})
export class TreeElementComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRouteSnapshot
  ) { }

  ngOnInit() {
  }

}
