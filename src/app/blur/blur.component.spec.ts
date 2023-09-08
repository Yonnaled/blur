import { TestBed } from '@angular/core/testing';
import { BlurComponent } from './blur.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [BlurComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BlurComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'blur-glass'`, () => {
    const fixture = TestBed.createComponent(BlurComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('blur-glass');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BlurComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('blur-glass app is running!');
  });
});
