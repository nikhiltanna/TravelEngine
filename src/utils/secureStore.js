/**
 * Secure storage utility for sensitive user data.
 * Prevents basic XSS injections and provides a namespace for travel-related data.
 */
export const secureSave = (key, data) => {
  try {
    const sanitized = JSON.stringify(data).replace(/<script/g, '');
    localStorage.setItem(`vd_v1_${key}`, sanitized);
  } catch (error) {
    console.error('Failed to save to secure store:', error);
  }
};

export const secureLoad = (key, defaultValue = null) => {
  try {
    const raw = localStorage.getItem(`vd_v1_${key}`);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch (error) {
    console.error('Failed to load from secure store:', error);
    return defaultValue;
  }
};

export const secureRemove = (key) => {
  localStorage.removeItem(`vd_v1_${key}`);
};
