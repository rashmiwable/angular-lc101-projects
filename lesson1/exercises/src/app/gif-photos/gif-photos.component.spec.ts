import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifPhotosComponent } from './gif-photos.component';

describe('GifPhotosComponent', () => {
  let component: GifPhotosComponent;
  let fixture: ComponentFixture<GifPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
