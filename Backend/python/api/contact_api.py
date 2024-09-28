import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


GMAIL_USER = 'yazid.ziad2000@gmail.com'
GMAIL_PASSWORD = 'zizouyazidmouha1213'

def send_email(email, subject, message_body):
    try:
        # Set up the email
        msg = MIMEMultipart()
        msg['From'] = GMAIL_USER
        msg['To'] = GMAIL_USER  
        msg['Subject'] = f"Contact Form: {subject}"

        # Attach message
        body = f"From: {email}\n\nMessage:\n{message_body}"
        msg.attach(MIMEText(body, 'plain'))

        # Connect to Gmail server and send email
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(GMAIL_USER, GMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(GMAIL_USER, GMAIL_USER, text)
        server.quit()

        return True
    except Exception as e:
        print(f"Failed to send email: {str(e)}")
        return False


@app.route('/api/contact', methods=['POST','GET'])
def contact():
    try:
        # Get JSON data from the request
        data = request.json
        if data:
            email = data.get('email')
            subject = data.get('subject')
            message = data.get('message')

            return jsonify({'message': 'Contact data received', 'data': data}), 200
            
        if not email or not subject or not message:
                return jsonify({"error": "Email, subject, and message fields must not be empty"}), 400


        email_sent = send_email(email, subject, message)
        if email_sent:
            return jsonify({'message': 'Contact data received and email sent'}), 200
        else:
            return jsonify({'message': 'Contact data received, but failed to send email'}), 500

        # Send a response
        return jsonify({"message": "Contact received successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)