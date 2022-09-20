from email.policy import default
from sqlalchemy import Integer, Column, Boolean, ForeignKey

from datamodels import Base

class UIDMapping(Base):
    __tablename__ = "uidmapping"

    uid = Column(Integer, primary_key = True)
    hoyo_id = Column(Integer, ForeignKey("genshinuser.mihoyo_id", ondelete='CASCADE'), nullable=False)

    main = Column(Boolean, nullable= False, default=False)