import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../../helper/models/user.model';
import { validationMessages } from '../../helper/validations-messages';
import { passwordConfirmValidator } from '../../helper/validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ancestor } from '../../helper/models/ancestor.model';
import { AncestorService } from '../../helper/ancestor.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { MAIN_PAGE } from '../../helper/constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: User = new User();
  public ancestor: Ancestor = new Ancestor();
  public validationMessages = validationMessages;
  public signupForm: FormGroup;
  public ancestors: Ancestor[] = [];
  public isShowForm = false;
  public showSelect = false;
  public selectedAncestor: Ancestor;
  constructor(private fb: FormBuilder,
              private _userService: UserService,
              private ancestorService: AncestorService,
              private _router: Router,
              private _localStorage: LocalStorageService) {
  }

  ngOnInit() {
    this.ancestorService.getAncestors([], true).subscribe(ancestors => {
      ancestors.forEach(ancestor => {
        this.ancestors.push(Ancestor.loadFromJSON(ancestor));
      });
    });
  }

  initForm(ancestor?: Ancestor) {
    if (this.signupForm)
      this.signupForm.reset();

    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', [Validators.required, passwordConfirmValidator('password1')]],
      first_name: [ancestor instanceof Ancestor ? ancestor.first_name : '', Validators.required],
      last_name: [ancestor instanceof Ancestor ? ancestor.last_name : '', Validators.required],
      third_name: [ancestor instanceof Ancestor ? ancestor.third_name : '', []],
      gender: [ancestor instanceof Ancestor ? ancestor.gender : '', Validators.required],
      birth: [ancestor instanceof Ancestor ? ancestor.birth : '']
    });
  }

  showSelectAncestor() {
    this.showSelect = true;
    this.isShowForm = false;
  }

  showForm(e?: any) {
    if (e && e.item)
      this.selectedAncestor = <Ancestor>e.item;
    else {
      this.showSelect = false;
      this.selectedAncestor = null;
    }

    this.initForm(this.selectedAncestor);
    this.isShowForm = true;
  }

  search = (text$: Observable<string>) =>
    text$
      .map(term => term.length < 2 ? []
        : this.ancestors.filter(v =>
        [v.first_name, v.last_name, v.third_name].join(' ').toLowerCase().indexOf(term.toLowerCase()) > -1)
      );

  formatter = (result: Ancestor) => [result.first_name, result.last_name, result.third_name].join(' ');

  signUp() {
    this.user.email = this.signupForm.get('email').value;
    this.user.password1 = this.signupForm.get('email').value;
    this.user.password2 = this.signupForm.get('email').value;
    this.ancestor.first_name = this.signupForm.get('first_name').value;
    this.ancestor.last_name = this.signupForm.get('last_name').value;
    this.ancestor.third_name = this.signupForm.get('third_name').value;
    this.ancestor.gender = this.signupForm.get('gender').value;
    this.ancestor.birth = this.signupForm.get('birth').value;

    this._userService.signUp(this.user.email, this.user.password1).subscribe(
      response => {
        this._userService.getUserInfo().subscribe(info => {

          if (this.selectedAncestor) {

            this.ancestorService.updateAncestor(this.selectedAncestor.id, {user: info.pk}).subscribe(resp => {
              this._router.navigate([MAIN_PAGE]);
            });

          } else {

            const ancestor: any = Object.assign({}, this.ancestor);
            ancestor.user = info.pk;
            delete ancestor.death;

            this.ancestorService.createAncestor(ancestor, true).subscribe(resp => {
              this._router.navigate([MAIN_PAGE]);
            });

          }
        });
      },
      error => console.log(error)
    );
  }
}
