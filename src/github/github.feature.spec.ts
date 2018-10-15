import { defineFeature, loadFeature } from 'jest-cucumber';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app/app.component';
import { GithubModule } from './github.module';

const feature = loadFeature('src/github/github.feature');

defineFeature(feature, test => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [GithubModule]
    })
.compileComponents();
  }));
  let app;

  test('I am immediately on the research', ({ when, then, pending }) => {
    when('I launch the application', () => {
      app = TestBed.createComponent(AppComponent).debugElement;
    });
    then('I can enter a search text', () => {
      const input: HTMLElement = app.nativeElement.querySelector('input');
      expect(input).not.toBeNull();
      expect(input.attributes.getNamedItem('type').value).toEqual('text');
      expect(input.attributes.getNamedItem('id').value).toEqual('searchInput');
    });
});
});
