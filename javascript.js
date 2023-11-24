function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      document.getElementById('result').textContent = `Your age is: ${age - 1} years old.`;
    } else {
      document.getElementById('result').textContent = `Your age is: ${age} years old.`;
    }
  }
  