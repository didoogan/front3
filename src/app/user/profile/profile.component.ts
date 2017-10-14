import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Ancestor } from '../../helper/models/ancestor.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    private url = '';
    private imgElem: any = null;
    private signInForm: FormGroup;

    selectedTab: string = 'changeInfo';
    ancestor: Ancestor;

    constructor(private _fb: FormBuilder) {
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
        this.selectedTab = this.selectedTab === 'changeInfo' ? 'changePhoto' : 'changeInfo'
    }

    createAncestor() {
        console.log(this.ancestor);
    }

    ngOnInit() {
        this.ancestor = new Ancestor();
    }
}
