import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from '../user-info.module';

@Injectable()
@Component({
  selector: 'tacobell-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  myInfo: UserInfo | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("SENDING GET REQUEST TO SERVER");
    this.getUserInfo();
    console.log("REGISTERING showUserInfo as a subscriber");
    this.showUserInfo();
  }

  getUserInfo() {
    return this.http.get<UserInfo>('https://tacobellapp-aad01-default-rtdb.firebaseio.com/my-info.json');
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data);
      this.myInfo = data;
    }
    ) 
  }

}
