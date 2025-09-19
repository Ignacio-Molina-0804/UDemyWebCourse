import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosHTTP } from './usuarios-http';

describe('UsuariosHTTP', () => {
  let component: UsuariosHTTP;
  let fixture: ComponentFixture<UsuariosHTTP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosHTTP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosHTTP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
