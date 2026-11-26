CREATE TABLE TB_MOTZ_BIZ_DRV_INFO(
	Id							bigint IDENTITY(1,1) NOT NULL,
	PersonId					bigint NULL,
	RegistrationNumber			nvarchar(50) NULL,
	DriverLicenseNumber			nvarchar(50) NULL,
	DriverCategory				nvarchar(50) NULL,
	Validate					date NULL,
	FirstLicenseDate			date NULL,
	EmissionDate				date NULL,
	LicenseState				nvarchar(2) NULL,
	LisenceCity					nvarchar(50) NULL,
	SecurityCode				nvarchar(50) NULL,
	CNHObs						nvarchar(1000) NULL,
	
	UpdateDate					datetime NULL,
	CreateDate					datetime DEFAULT (getdate()),
	IsActive					bit NOT NULL,
 CONSTRAINT PK_TB_MOTZ_BIZ_DRV_INFO PRIMARY KEY CLUSTERED 
(
	Id ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)
GO

ALTER TABLE TB_MOTZ_BIZ_DRV_INFO  WITH CHECK ADD  CONSTRAINT FK_PersonId_TB_MOTZ_BIZ_PERS FOREIGN KEY(PersonId)
REFERENCES TB_MOTZ_BIZ_PERS (Id)
GO

ALTER TABLE TB_MOTZ_BIZ_DRV_INFO CHECK CONSTRAINT FK_PersonId_TB_MOTZ_BIZ_PERS
GO



--sp_help 

--drop table TB_MOTZ_BIZ_DRV_INFO