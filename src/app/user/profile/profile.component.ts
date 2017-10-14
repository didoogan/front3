import { Component, OnInit } from '@angular/core';
import {AncestorModel} from "./model.profile";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    url = "";
    imgElem: any = null;
    private signInForm: FormGroup;


    selectedTab: string = 'changeInfo';
    ancestor: AncestorModel;

    constructor(private _fb: FormBuilder) {
    }

    readUrl(event: any) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();

            reader.onload = (event: any) => {
                this.url = event.target.result;
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    toggleTab() {
        this.selectedTab = this.selectedTab == "changeInfo" ? "changePhoto" : "changeInfo"
    }

    createAncestor() {
        console.log(this.ancestor);
    }

    ngOnInit() {
        this.ancestor = new AncestorModel();
    }
}
