import { GithubModule } from './github.module';

describe('GithubModule', () => {
  let githubModule: GithubModule;

  beforeEach(() => {
    githubModule = new GithubModule();
  });

  it('should create an instance', () => {
    expect(githubModule).toBeTruthy();
  });
});
