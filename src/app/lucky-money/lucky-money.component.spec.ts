import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyMoneyComponent } from './lucky-money.component';

describe('LuckyMoneyComponent', () => {
  let component: LuckyMoneyComponent;
  let fixture: ComponentFixture<LuckyMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
