document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
  
    // Basic validation
    if (name.trim() === '' || phone.trim() === '') {
      document.getElementById('error-message').innerText = 'All fields are required';
    } else {
      // Submit the form or do further processing
      alert('Account created successfully!');
    }
  });

  var monthSelect = document.getElementById("dob1");
        for (var i = 1; i <= 12; i++) {
            var option = document.createElement("option");
            option.text = i;
            monthSelect.add(option);
        }

        // Populate days
        var daySelect = document.getElementById("dob2");
        for (var i = 1; i <= 31; i++) {
            var option = document.createElement("option");
            option.text = i;
            daySelect.add(option);
        }

        // Populate years
        var yearSelect = document.getElementById("dob3");
        var currentYear = new Date().getFullYear();
        for (var i = currentYear; i >= 1900; i--) {
            var option = document.createElement("option");
            option.text = i;
            yearSelect.add(option);
        }