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

    Link_id = Column(Integer, autoincrement=True, primary_key=True)
    Url_address = Column(VARCHAR(2048), index=True, nullable=False)
    Description = Column(Text, index=True)
    User_id = Column(Integer, ForeignKey("Users_data.User_id"))

    Link_User = relationship("UsersData", back_populates="User_Link")
    Link_Script = relationship("Scripts", back_populates="Script_Link")

class Scripts(Base):
    Script_id = Column(Integer, autoincrement=True, primary_key=True)
    Instructions = Column(Text, nullable=False)
    Link_id = Column(Integer, ForeignKey("Links.Link_id"))

    Script_Link = relationship("Links", back_populates="Link_Script")

class
