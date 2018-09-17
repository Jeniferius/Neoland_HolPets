import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCuidadorComponent } from './vista-cuidador.component';

describe('VistaCuidadorComponent', () => {
  let component: VistaCuidadorComponent;
  let fixture: ComponentFixture<VistaCuidadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCuidadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
