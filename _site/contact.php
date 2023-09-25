<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $business = $_POST['business'];
    $category = $_POST['category'];
    $message = $_POST['message'];

    $to = "roxanne@rene-agency.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $body = "First Name: $fname\nLast Name: $lname\nEmail: $email\nBusiness Name: $business\nCategory: $category\nMessage: $message";

    // Send email
    mail($to, $subject, $body);

    echo "Merci pour votre demande, je revaindrais vers vous le plus vite possible.";
}
?>