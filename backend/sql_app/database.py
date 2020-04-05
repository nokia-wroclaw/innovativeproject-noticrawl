from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
#ORM - Object-Relational Mapping

#Connectiong to PostgreSQL database:
SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/Noticrawl.db"

#Create SQLAlchemy engine:
engine = create_engine(SQLALCHEMY_DATABASE_URL)

#Create SessionLocal class - actual database session:
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

#Create Base class
#Later we will inherit from this class to create each of the database models or classes (the ORM models):
Base = declarative_base()
