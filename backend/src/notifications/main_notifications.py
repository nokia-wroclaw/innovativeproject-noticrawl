import smtplib
import imghdr
from backend.src.notifications.email_config import EMAIL_ADDRESS, EMAIL_PASSWORD
from email.message import EmailMessage
from fastapi import HTTPException

def send_email(send_to, image):
    with open(image, 'rb') as f:
        file_data = f.read()
        file_type = imghdr.what(f.name)
        file_name = f.name

    msg = EmailMessage()
    msg["Subject"] = 'Noticrawl notification'
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = send_to
    msg.set_content("Hello, I'm Noticrawl email. Have a nice day")
    msg.add_alternative("""\
    <!DOCTYPE html>
    <html>
        <body>
            <h1 style="color:Steelblue;">Your śledzik has changed!</h1>
        </body>
    </html>    
    """, subtype='html')
    msg.add_attachment(file_data, maintype='image', subtype=file_type, filename=file_name)
    try:
        server = smtplib.SMTP('smtp.gmail.com:587')
        server.ehlo()
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)
        server.quit()
        raise HTTPException(status_code=200, detail="Success: Email sent!")
    except ValueError:
        raise HTTPException(status_code=500, detail="Error: Email failed to send.")
