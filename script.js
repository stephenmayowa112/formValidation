function validateForm() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    
    
     // Check if first name and last name are at least 3 characters
     if (firstName.length < 3 || lastName.length < 3) {
        alert("Please enter at least 3 characters for both First Name and Last Name, Thank you.");
        return; 
      }

    if (hasWhitespace(firstName) || hasWhitespace(lastName) || hasWhitespace(email) || hasWhitespace(password)) {
      alert("Please remove any whitespace characters from your input.");
      return; 
    }
  
    // Email validation with regular expression
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return ; 
    }

    
    const nameRegex = /^[a-zA-Z]+$/; // Allows only letters
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    alert("Please enter names without any numbers.");
    return;
}
  
    // Password length check
    const minPasswordLength = 8; // to determine the password length
    if (password.length < minPasswordLength) {
      alert("Password must be at least " + minPasswordLength + " characters long.");
      return; 
    }
    
    localStorage.setItem("userEmail", email); 
    alert("Form submitted successfully! Your email has been stored locally.");

  }
console.log(firstName);
console.log(lastName);
console.log(email);
  


