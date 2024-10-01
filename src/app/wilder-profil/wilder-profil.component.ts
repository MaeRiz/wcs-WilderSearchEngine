import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-wilder-profil',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './wilder-profil.component.html',
  styleUrl: './wilder-profil.component.scss'
})
export class WilderProfilComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  wilderName!: string;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.wilderName = params.get('wildername')!;
    });
  }
}
