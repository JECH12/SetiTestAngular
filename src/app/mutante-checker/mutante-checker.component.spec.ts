import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutanteCheckerComponent } from './mutante-checker.component';

describe('MutanteCheckerComponent', () => {
  let component: MutanteCheckerComponent;
  let fixture: ComponentFixture<MutanteCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutanteCheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutanteCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
