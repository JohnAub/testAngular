import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiziComponent } from './zizi.component';

describe('ZiziComponent', () => {
  let component: ZiziComponent;
  let fixture: ComponentFixture<ZiziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZiziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
