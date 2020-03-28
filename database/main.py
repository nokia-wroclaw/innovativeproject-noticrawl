from database.database_backend import models
from database.database_backend.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

