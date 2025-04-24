import { API_ENDPOINTS } from '@/config/api';

/**
 * Simple utility to test the API connection
 * Usage: Import and call in browser console: testContactApi()
 */
export async function testContactApi() {
  try {
    console.log('Testing contact API endpoint:', API_ENDPOINTS.contact);
    
    const testData = {
      name: "Test User",
      email: "test@example.com",
      subject: "API Test",
      message: "This is a test message to verify the API connection"
    };
    
    // Simple fetch without credentials or extra headers for basic test
    const response = await fetch(API_ENDPOINTS.contact, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData),
      mode: 'cors'
    });
    
    console.log('Response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('Success! Response data:', data);
      return { success: true, data };
    } else {
      const errorText = await response.text();
      console.error('Error response:', response.status, errorText);
      return { success: false, error: `${response.status}: ${errorText}` };
    }
  } catch (error) {
    console.error('Connection error:', error);
    return { success: false, error };
  }
} 