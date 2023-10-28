
    // document.getElementById('booking-final').addEventListener('click', function () {
    //     var name = document.getElementById('name').value;
    //     var email = document.getElementById('email').value;
    //     var selectedOption = document.querySelector('select').value;
    //     var serviceDate = document.getElementById('service').value;
    //     var specialRequest = document.getElementById('Request').value;

    //     var emailBody = "Name: " + name + "\n" +
    //         "Email: " + email + "\n" +
    //         "Selected Option: " + selectedOption + "\n" +
    //         "Service Date: " + serviceDate + "\n" +
    //         "Special Request: " + specialRequest;

    //     var emailLink = "mailto:m.rizwanhaider11@gmail.com?subject=Booking Request&body=" + encodeURIComponent(emailBody);
    //     window.location.href = emailLink;
    // });
    
    // function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //     } else {
    //         alert("Geolocation is not supported by your browser.");
    //     }
    // }

    // function showPosition(position) {
    //     var latitude = position.coords.latitude;
    //     var longitude = position.coords.longitude;
    //     var locationInput = document.getElementById("location");
    //     locationInput.value = latitude + ", " + longitude;
    // }
    
    document.getElementById('booking-final').addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var selectedOption = document.querySelector('select').value;
        var serviceDate = document.getElementById('service').value;
        var specialRequest = document.getElementById('Request').value;
        var location = document.getElementById('location').value;

        var emailBody = "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Selected Option: " + selectedOption + "\n" +
            "Service Date: " + serviceDate + "\n" +
            "Special Request: " + specialRequest + "\n" +
            "Location: " + location;

        var emailLink = "mailto:your-email@example.com?subject=Booking Request&body=" + encodeURIComponent(emailBody);

        window.location.href = emailLink;
    });

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var location = "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
                document.getElementById('location').value = location;
            });
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    }


