#model - refer to these classes and instances that interact with the database
from sqlalchemy import Column, ForeignKey, Integer, VARCHAR, Text, Enum, CheckConstraint
from sqlalchemy.orm import relationship

from .database import Base

class UsersData(Base):
    __tablename__ = "Users_data"

    User_id = Column(Integer, autoincrement=True, primary_key=True, index=True)
    Email = Column(VARCHAR(255), CheckConstraint('Email=%@%.%'), unique=True, index=True, nullable=False)
    User_password = Column(VARCHAR(128), CheckConstraint('User_password>poprawnehaslo'), nullable=False)

    User_Link = relationship("Links", back_populates="Link_User")

class Links(Base):
    __tablename__ = "Links"

    Link_id = Column(Integer, autoincrement=True, primary_key=True, index=True)
    Url_address = Column(VARCHAR(2048), nullable=False, index=True)
    Description = Column(Text, index=True)
    User_id = Column(Integer, ForeignKey("Users_data.User_id"))

    Link_User = relationship("UsersData", back_populates="User_Link")
    Link_Script = relationship("Scripts", back_populates="Script_Link")

class Scripts(Base):
    __tablename__ = "Scripts"
    Script_id = Column(Integer, autoincrement=True, primary_key=True, index=True)
    Instructions = Column(Text, nullable=False, index=True)
    Link_id = Column(Integer, ForeignKey("Links.Link_id"))

    Script_Link = relationship("Links", back_populates="Link_Script")
    Script_Notification = relationship("Notifications", back_populates="Notification_Script")

class Notifications(Base):
    __tablename__ = "Notifications"
    Notification_id = Column(Integer, autoincrement=True, primary_key=True, index=True)
    Address = Column(VARCHAR(255), index=True)
    Communicator = Column(Enum('email', 'slack', name='Communicators'), nullable=False)
    Script_id = Column(Integer, ForeignKey("Scripts.Script_id"))

    Notification_Script = relationship("Scripts", back_populates="Script_Notification")
