import { secureSave, secureLoad } from './secureStore';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
    removeItem: (key) => { delete store[key]; }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('secureStore Utility', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should correctly save and load data', () => {
    const data = { id: 1, title: 'Test Trip' };
    secureSave('test', data);
    const loaded = secureLoad('test');
    expect(loaded).toEqual(data);
  });

  test('should return default value when key is missing', () => {
    const loaded = secureLoad('missing', 'default');
    expect(loaded).toBe('default');
  });

  test('should sanitize <script> tags on save', () => {
    const toxicData = { note: '<script>alert("hacked")</script>' };
    secureSave('toxic', toxicData);
    const raw = localStorage.getItem('vd_v1_toxic');
    expect(raw).not.toContain('<script');
  });
});
