import { Component } from '@angular/core';
import { ScApiService } from '../sc-api.service';
import { apiKey } from '../environment/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass'],
})
export class MembersComponent {
  constructor(public members: ScApiService, private _route: Router) {}

  public apiData: any;

  getMembers() {
    let apiUrl = `https://api.starcitizen-api.com/${apiKey}/live/organization_members/SYNTHS`;
    console.log(apiUrl);
    return this.members.fetchApi(apiUrl).subscribe((data) => {
      console.log(apiUrl);
      console.log(data.data);
      this.apiData = data.data;
    });
  }

  public option: string;
  public selectedMember: string;

  handleChange(option: string) {
    console.log(this.selectedMember);
    this._route.navigateByUrl(`/ships/${this.selectedMember}`);
  }
}
