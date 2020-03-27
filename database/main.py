from backend.database import models
from backend.database.database import SessionLocal, engine
models.Base.metadata.create_all(bind=engine)

print(models.UsersData.Email)