<?php

  $name = $_POST['name'];
  $visitors_email = $_POST['email'];
  $message = $_POST['message'];

  $email_form = 'T.j.h1357911@gmail.com';

  $email_subject = "New Form Submission";

  $email_body = "User Name: $name.\n".
                "User Email: $visitors_email.\n".
                "User Message: $message.\n";

  $to = "T.j.h1357911@gmail.com";

  $headers = "From: $email_form \r\n";

  $headers = "Reply-To: $visitors_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: qa_clinic.html");


 ?>
