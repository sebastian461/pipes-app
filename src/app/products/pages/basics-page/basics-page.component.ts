import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'sebastián';
  public nameUpper: string = 'SEBASTIÁN';
  public fullName: string = 'SeBaStIáN áLaVa';

  public customDate: Date = new Date();
}
