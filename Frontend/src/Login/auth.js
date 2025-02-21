// Mock authentication service
export const auth = {
    isAuthenticated: false, // Tracks authentication status
  
    login(username, password, callback) {
      // Simulate an API call or authentication check
      setTimeout(() => {
        if (username === "admin" && password === "password123") {
          this.isAuthenticated = true; // Set authenticated to true
          callback(true); // Success
        } else {
          this.isAuthenticated = false; // Set authenticated to false
          callback(false); // Failure
        }
      }, 1000); // Simulate network delay
    },
  
    logout(callback) {
      this.isAuthenticated = false; // Set authenticated to false
      setTimeout(callback, 100); // Simulate network delay
    },
  };
  
   