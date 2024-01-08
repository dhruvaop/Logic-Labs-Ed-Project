exports.contactUsEmail = (
  email,
  firstName,
  lastName,
  message,
  phoneNo,
  countryCode
) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Form Confirmation</title>

    <style>
      body {
        background-color: #ffffff;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.4;
        color: #333333;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
      }

      .logo {
        max-width: 200px;
        margin-bottom: 20px;
      }

      .message {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .body {
        font-size: 16px;
        margin-bottom: 20px;
      }

      .cta {
        display: inline-block;
        padding: 10px 20px;
        background-color: #ffd60a;
        color: #000000;
        text-decoration: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
      }

      .support {
        font-size: 14px;
        color: #999999;
        margin-top: 20px;
      }

      .highlight {
        font-weight: bold;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <!-- Header -->
      <div>
        <a href="https://logiclabsed-dhruvaop.vercel.app/">
          <img class="logo" src="https://i.postimg.cc/fbcsdnFg/logo-yellow-email.png" alt="Logic Labs Ed-Logo" />
        </a>
      </div>

      <!-- Body -->
      <div class="body">
        <p class="message">Contact Form Confirmation</p>

        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for contacting us. We have received your message and will respond to you as soon as possible.</p>
        <p>Here are the details you provided:</p>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${countryCode} ${phoneNo}</p>
        <p>Message: ${message}</p>
        <p>We appreciate your interest and will get back to you shortly.</p>
      </div>

      <!-- Footer -->
      <div class="support">
        <p>If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:moviesguruji73529+info@gmail.com">moviesguruji73529+info@gmail.com</a>. We are here to help!</p>
      </div>
    </div>
  </body>
</html>

  `;
}
