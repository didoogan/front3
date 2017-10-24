import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ancestor } from '../../helper/models/ancestor.model';
import { validationMessages } from '../../helper/validations-messages';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AncestorService } from '../../helper/ancestor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public url = '';
  public imgElem: any = null;
  public ancestorForm: FormGroup;
  public validationMessagesObject = validationMessages;
  public errors: any = {};
  public ancestors: Ancestor [];
  public selectedTab: string = 'changeInfo';
  public ancestor: Ancestor;

  public isUpdate: boolean = false;
  public subToGetAncestor;
  public showDetailInfo: boolean = true;
  constructor(private _fb: FormBuilder,
              private ancestorService: AncestorService,
              private _route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.isUpdate = this._route.snapshot.data.action === 'update';
    this.ancestorService.getAncestors().subscribe(
      response => {
        this.ancestors = response;
      },
      error => console.log(error)
    );

    if (this.isUpdate) {
      this.subToGetAncestor = this._route.data.subscribe((data: any) => {
        this.ancestor = <Ancestor>data.ancestor;
        this.initForm(this.ancestor);
      });
    } else {
      this.initForm();
    }
  }

  initForm(ancestor?: Ancestor) {
    this.ancestorForm = this._fb.group({
      first_name: [ancestor ? ancestor.first_name : '', [Validators.required, Validators.maxLength(20)]],
      last_name: [ancestor ? ancestor.last_name : '', [Validators.required, Validators.maxLength(20)]],
      third_name: [ancestor ? ancestor.third_name : '', []],
      birth: [ancestor ? ancestor.birth : null, []],
      gender: [ancestor ? ancestor.gender : false, [Validators.required]],
      bio: [ancestor ? ancestor.bio : '', []],
      death: [ancestor ? ancestor.death : null, []],
      parents: [ancestor ? ancestor.parents : null, []],
      children: [ancestor ? ancestor.children : null, []],
      siblings: [ancestor ? ancestor.siblings : null, []]
    });
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
  toggleDetailInfo() {
    this.showDetailInfo = !this.showDetailInfo;
  }

  submitForm() {
    const ancestorData = this.ancestorForm.value;

    const removeIfEmpty = ['death', 'birth', 'parents', 'siblings', 'children'];
    for (const field in removeIfEmpty)
      if (!ancestorData[removeIfEmpty[field]] || ancestorData[removeIfEmpty[field]].length === 0)
        delete ancestorData[removeIfEmpty[field]];

    if (!this.isUpdate)
      this.ancestorService.createAncestor(ancestorData).subscribe(
        response => console.log(response),
        error => console.log(error)
      );
    else {
      this.ancestorService.updateAncestor(this.ancestor.id, ancestorData).subscribe(
        response => console.log(response),
        error => console.log(error)
      );
    }
  }

  ngOnDestroy() {
    if (this.subToGetAncestor) {
      this.subToGetAncestor.unsubscribe();
    }
  }
}
