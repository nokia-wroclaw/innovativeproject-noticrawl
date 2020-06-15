import imghdr
import logging
import os
import smtplib
from email.message import EmailMessage

from dynaconf import settings
from fastapi import HTTPException


logger = logging.getLogger("Noticrawl")


def send_email(
        send_to,
        screenshot_path,
        subject,
        email_text_path="/app/backend/src/helpers/email_notifications/email_crawling.html"
    ):
    logger.log(level=logging.DEBUG, msg=f"Entering send_email")
    email_address = settings.EMAIL
    email_password = settings.EMAIL_PASSWORD

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = email_address
    msg["To"] = send_to

    with open(email_text_path, 'r') as html:
        msg.add_alternative(html.read(), subtype='html')

    # logger.log(level=logging.DEBUG, msg=f"Reading screenshot")
    with open(screenshot_path, 'rb') as f:
        file_data = f.read()
        file_type = imghdr.what(f.name)
        file_name = os.path.basename(f.name)
        f.close()
    # logger.log(level=logging.DEBUG, msg=f"Got screenshot")
    msg.add_attachment(file_data, maintype='image', subtype=file_type, filename=file_name)


    try:
        # logger.log(level=logging.DEBUG, msg=f"Trying to send email with subcject: {subject}")
        server = smtplib.SMTP('smtp.gmail.com:587')
        server.ehlo()
        server.starttls()
        server.login(email_address, email_password)
        server.send_message(msg)
        server.quit()
        # logger.log(level=logging.DEBUG, msg=f"Email to {send_to} was sent. Subcject: {subject}")
    except ValueError:
        raise HTTPException(status_code=500, detail="Error: Email failed to send.")
