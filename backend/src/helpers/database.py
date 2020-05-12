from sqlalchemy.orm import Session

from src.database.connection import SessionLocal


def get_db():
    try:
        db: Session = SessionLocal()
        yield db
    finally:
        db.close()
