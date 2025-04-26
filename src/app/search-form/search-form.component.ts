import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {

  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute)

  fieldContent: string = ''
  defaultValue!: string;
  messageChild: string = ''

  buttons = [
    {
      title: 'Facebook',
      color: '#3b5998',
      txt_color: '',
    },
    {
      title: 'Snapchat',
      color: 'yellow',
      txt_color: 'black',
    },
    {
      title: 'Instagram',
      color: '#F56040',
      txt_color: '',
    },
    {
      title: 'Tiktok',
      color: '#00f2ea',
      txt_color: 'black',
    },
    {
      title: 'X',
      color: 'black',
      txt_color: '',
    },
  ]

  messageReceivedFromChild = (message: string) => {
    this.messageChild = (message)
  }

  onSubmit =(): void => {
    this.router.navigate(['wcs', this.fieldContent])
  }

  ngOnInit() {
    this.route.parent?.paramMap.subscribe((params: ParamMap) => {
     this.defaultValue = params.get('wildername')!;
   });
  }
}
