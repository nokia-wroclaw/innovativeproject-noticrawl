from time import sleep

from sqlalchemy import (
    VARCHAR,
    CheckConstraint,
    Column,
    Enum,
    ForeignKey,
    Integer,
    Text,
    exc,
)
from sqlalchemy.orm import relationship

from .connection import Base, engine


class Users(Base):
    __tablename__ = "Users"

    user_id = Column(Integer, autoincrement=True, primary_key=True, index=True)
    email = Column(
        VARCHAR(255),
        CheckConstraint("email SIMILAR TO '%@%.%'"),
        unique=True,
        index=True,
        nullable=False,
    )
    password = Column(VARCHAR(128), nullable=False)

    user_link = relationship("Links", back_populates="link_user")


class Links(Base):
    __tablename__ = "Links"

    link_id = Column(Integer, autoincrement=True, primary_key=True, index=True)
    url = Column(VARCHAR(2048), nullable=False, index=True)
    description = Column(Text, index=True)
    user_id = Column(Integer, ForeignKey("Users.user_id"))

    link_user = relationship("Users", back_populates="user_link")
    link_script = relationship("Scripts", back_populates="script_link")


class Scripts(Base):
    __tablename__ = "Scripts"
    script_id = Column(Integer, autoincrement=True, primary_key=True, index=True)
    instructions = Column(Text, nullable=False, index=True)
    link_id = Column(Integer, ForeignKey("Links.link_id"))

    script_link = relationship("Links", back_populates="link_script")
    script_notification = relationship(
        "Notifications", back_populates="notification_script"
    )


class Notifications(Base):
    __tablename__ = "Notifications"
    notification_id = Column(Integer, autoincrement=True, primary_key=True, index=True)
    address = Column(VARCHAR(255), index=True)
    communicator = Column(Enum("email", "slack", name="Communicators"), nullable=False)
    script_id = Column(Integer, ForeignKey("Scripts.script_id"))

    notification_script = relationship("Scripts", back_populates="script_notification")


class RevokedTokens(Base):
    __tablename__ = "Revoked Tokens"
    token_id = Column(Integer, autoincrement=True, primary_key=True)
    signature = Column(VARCHAR(1023))
    expiry_date = Column(Integer, nullable=False)


def create():
    MAX_RETRIES_NUM = 15
    retry_num = 1
    executed_successfully = False

    while (not executed_successfully) and (retry_num <= MAX_RETRIES_NUM):
        try:
            Base.metadata.create_all(bind=engine)
            executed_successfully = True

        except exc.OperationalError as e:
            if "could not connect to server: Connection refused" in str(e):
                print(
                    "DATABASE EXCEPTION: Database is not yet accepting connections. ",
                    "Sleeping for 2 seconds...",
                )
            elif "the database system is starting up" in str(e):
                print(
                    "DATABASE EXCEPTION: Database is starting up. ",
                    "Sleeping for 2 seconds...",
                )
            else:
                print("WARNING! Unhandled <sqlalchemy.exc.OperationalError>!")
                raise
            sleep(2)
            retry_num += 1
