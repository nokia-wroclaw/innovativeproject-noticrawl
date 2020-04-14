from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from string import Template
import os

#ORM - Object-Relational Mapping

#Connectiong to PostgreSQL database:

database_url_template = Template("postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}")
DATABASE_URL = database_url_template.substitute(DB_USER = os.getenv("DB_USER"), DB_PASSWORD = os.getenv("DB_PASSWORD"), DB_NAME = os.getenv("DB_NAME"), DB_HOST = os.getenv("DB_HOST"))

#Create SQLAlchemy engine:
engine = create_engine(DATABASE_URL, pool_pre_ping=True)

#Create SessionLocal class - actual database session:
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

#Create Base class
#Later we will inherit from this class to create each of the database models or classes (the ORM models):
Base = declarative_base()
