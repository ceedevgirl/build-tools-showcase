import {
  toggleBookmark,
  loadBookmarks,
  tryTool,
  showToolInfo,
} from '../utils/toolUtils';
describe('tryTool and showToolInfo', () => {
  beforeAll(() => {
    window.open = jest.fn();
    window.alert = jest.fn();
  });

  it('opens the correct URL for Webpack', () => {
    tryTool('Webpack');
    expect(window.open).toHaveBeenCalledWith('https://webpack.js.org', '_blank');
  });

  it('opens a fallback URL for unknown tools', () => {
    tryTool('UnknownTool');
    expect(window.open).toHaveBeenCalledWith('#', '_blank');
  });

  it('calls alert with the tool name', () => {
    showToolInfo('TypeScript');
    expect(window.alert).toHaveBeenCalledWith('Showing info for TypeScript');
  });
});

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

describe('toggleBookmark', () => {
  it('adds a bookmark when not present', () => {
    toggleBookmark('Webpack');
    const stored = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    expect(stored).toContain('Webpack');
  });

  it('removes a bookmark when already present', () => {
    localStorage.setItem('bookmarks', JSON.stringify(['Webpack']));
    toggleBookmark('Webpack');
    const stored = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    expect(stored).not.toContain('Webpack');
  });
});

describe('loadBookmarks', () => {
  it('returns an empty array when no bookmarks are stored', () => {
    expect(loadBookmarks()).toEqual([]);
  });

  it('returns stored bookmarks', () => {
    localStorage.setItem('bookmarks', JSON.stringify(['Sass']));
    expect(loadBookmarks()).toEqual(['Sass']);
  });
});

describe('tryTool', () => {
  it('opens the correct URL for Webpack', () => {
    tryTool('Webpack');
    expect(window.open).toHaveBeenCalledWith('https://webpack.js.org', '_blank');
  });

  it('opens a fallback URL for unknown tools', () => {
    tryTool('UnknownTool');
    expect(window.open).toHaveBeenCalledWith('#', '_blank');
  });
});

describe('showToolInfo', () => {
  it('calls alert with the tool name', () => {
    showToolInfo('TypeScript');
    expect(window.alert).toHaveBeenCalledWith('Showing info for TypeScript');
  });
});
