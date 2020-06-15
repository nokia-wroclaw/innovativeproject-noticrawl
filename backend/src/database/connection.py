from string import Template

from dynaconf import settings
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Connectiong to PostgreSQL database:
database_url_template = Template(
    "postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"
)
DATABASE_URL = database_url_template.substitute(
    DB_USER=settings.DB_USER,
    DB_PASSWORD=settings.DB_PASSWORD,
    DB_NAME=settings.DB_NAME,
    DB_HOST=settings.DB_HOST,
    DB_PORT=settings.as_int("DB_PORT"),
)

# Create SQLAlchemy engine:
engine = create_engine(DATABASE_URL, pool_pre_ping=True)

# Create SessionLocal class - actual database session:
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create Base class
# Later we will inherit from this class to create each of the database models or classes (the ORM models):
Base = declarative_base()
