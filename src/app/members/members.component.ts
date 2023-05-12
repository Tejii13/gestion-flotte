import { Component } from '@angular/core';
import { ScApiService } from '../sc-api.service';
import { apiKey } from '../environment/environment';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass'],
})
export class MembersComponent {
  constructor(public members: ScApiService) {}

  public apiData: any;

  getMembers() {
    let apiUrl = `https://api.starcitizen-api.com/${apiKey}/live/organization_members/SYNTHS`;
    this.members.fetchApi(apiUrl).subscribe((data) => {
      console.log(apiUrl);
      console.log(data.data);
      this.apiData = data.data;
    });
  }
}
