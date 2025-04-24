// API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:7272';
// Remove trailing slash if it exists
const base = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;

// Match the backend controller route structure
export const API_ENDPOINTS = {
  // The SubmitContact action in ContactController
  contact: `${base}/api/Contact`
}; 