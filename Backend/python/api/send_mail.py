import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(subject, body, recipient_email):
    sender_email = "yazid.ziad2000@gmail.com"
    sender_password = "your_app_password"  # Use an App Password if 2FA is enabled

    # Set up the MIME
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = subject

    # Attach the body to the email
    msg.attach(MIMEText(body, 'plain'))

    # Set up the server
    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()  # Secure the connection
        server.login(sender_email, sender_password)

        # Send the email
        server.sendmail(sender_email, recipient_email, msg.as_string())
        print("Email sent successfully!")

    except Exception as e:
        print(f"Error: {e}")
    finally:
        server.quit()

# Example of sending an email
send_email(
    subject="Test Email from Python",
    body="This is a test email sent from a Python script.",
    recipient_email="recipient_email@gmail.com"
)