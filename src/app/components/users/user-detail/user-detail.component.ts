import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {SeoService} from "../../../services/seo.service";

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
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('User Detail - Angular SSR');
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.userId) {
      this.getUser();
    }
  }

  getUser() {
    this.userService.getUser(this.userId)
      .subscribe((res: any) => {
        this.user = res.data;
        this.seoService.updateTitle(this.user.first_name + ' ' + this.user.last_name + ' - Angular SSR');
        this.showSpinner = false;
      }, (err: any) => {
        this.isErr = true;
        this.showSpinner = false;
      });
  }

}
