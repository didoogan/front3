import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  url = "";
  imgElem: any = null;

  selectedTab: string = 'changeInfo';

  constructor() { }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  toggleTab() {
    this.selectedTab = this.selectedTab == "changeInfo" ? "changePhoto" : "changeInfo"
  }

  ngOnInit() {
  }

}
