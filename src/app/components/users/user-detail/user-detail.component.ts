import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss', '../users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {

  showSpinner = true;
  userId;
  user;
  isErr = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.userId) {
      this.getUser();
    }
  }

  getUser() {
    this.userService.getUser(this.userId)
      .subscribe((res: any) => {
        this.user = res.data;
        this.showSpinner = false;
      }, (err: any) => {
        this.isErr = true;
        this.showSpinner = false;
      });
  }

}
