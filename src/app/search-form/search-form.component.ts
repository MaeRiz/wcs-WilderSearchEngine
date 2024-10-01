import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {

  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute)

  fieldContent: string = ''
  defaultValue!: string;

  onSubmit =(): void => {
    this.router.navigate(['wcs', this.fieldContent])
  }

  ngOnInit() {
    this.route.parent?.paramMap.subscribe((params: ParamMap) => {
     this.defaultValue = params.get('wildername')!;
   });
  }
}
