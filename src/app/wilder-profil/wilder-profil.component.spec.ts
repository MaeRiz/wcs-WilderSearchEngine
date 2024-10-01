import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilderProfilComponent } from './wilder-profil.component';

describe('WilderProfilComponent', () => {
  let component: WilderProfilComponent;
  let fixture: ComponentFixture<WilderProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WilderProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilderProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
