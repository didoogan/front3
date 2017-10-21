import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ancestor } from '../../helper/models/ancestor.model';
import { validationMessages } from "../../helper/validations-messages";
import { TreeService } from "../../tree/tree.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private url = '';
  private imgElem: any = null;
  private signInForm: FormGroup;
  private validationMessagesObject = validationMessages;
  private errors: { [key: string]: string } = {};
  private ancestors: Ancestor [];
  private action: string = '';
  private ancestorId: string = '0';
  public selectedTab: string = 'changeInfo';
  public ancestor: Ancestor;

  constructor(private _fb: FormBuilder,
              private _treeService: TreeService,
              private _route: ActivatedRoute) {
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (eventData: any) => {
        this.url = eventData.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  toggleTab() {
    this.selectedTab = this.selectedTab === 'changeInfo' ? 'changePhoto' : 'changeInfo';
  }

  createAncestor() {
    this._treeService.createAncestor(this.signInForm.value, true).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      },
    );
  }

  ngOnInit() {
    this._route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.action = queryParams['action'];
          this.ancestorId = queryParams['id'] || this.ancestorId;
        }
      );
    this._treeService.getAncestors().subscribe(
      response => {
        this.ancestors = response;
      },
      error => console.log(error)
    );
    this.ancestor = new Ancestor();
    this.signInForm = this._fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(20)]],
      last_name: ['', [Validators.required, Validators.maxLength(20)]],
      third_name: ['', []],
      birth: [null, []],
      gender: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      death: [null, []],
      parents: [[], []],
      children: [[], []],
      siblings: [[], []]
    });
  }
}
