import smtplib
import imghdr
from dynaconf import settings
from email.message import EmailMessage
from fastapi import HTTPException


def send_email(send_to, screenshot, subject, email_text):
    with open(screenshot, 'rb') as f:
        file_data = f.read()
        file_type = imghdr.what(f.name)
        file_name = f.name

    email_address = settings.EMAIL
    email_password = settings.PASSWORD

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = email_address
    msg["To"] = send_to
    msg.add_alternative(email_text, subtype='html')
    msg.add_attachment(file_data, maintype='image', subtype=file_type, filename=file_name)

    try:
        server = smtplib.SMTP('smtp.gmail.com:587')
        server.ehlo()
        server.starttls()
        server.login(email_address, email_password)
        server.send_message(msg)
        server.quit()
        raise HTTPException(status_code=200, detail="Success: Email sent!")
    except ValueError:
        raise HTTPException(status_code=500, detail="Error: Email failed to send.")
