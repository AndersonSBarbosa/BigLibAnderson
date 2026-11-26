USE [PotifolioASB]
GO

CREATE TABLE [dbo].[Ocorrencia](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Descricao] [varchar](50) NULL,
	[Conclusao] [varchar](500) NULL,
	[DataOcorrencia] [datetime] NULL,
	[ResponsavelAbertura] [int] NULL,
	[ResponsavelOcorrencia] [int] NULL,
	[FluxoId] [int] NULL,
	[DataRegistro] [datetime] NULL   DEFAULT (getdate()),
	[DataAtualizacao] [datetime] NULL,
	[Ativo] [bit] NULL CONSTRAINT [DF_Fluxo_DataRegistro]  DEFAULT (1),
 CONSTRAINT [PK_Ocorrencia] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]


------------------------------------------------------------------------

CREATE TABLE [dbo].[Responsavel](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [varchar](50) NULL,
	[Email] [varchar](100) NULL,
	[Telefone] [varchar](12) NULL,
	[Endereco] [varchar](150) NULL,
	[CPF] [varchar](11) NULL,
	[DataRegistro] [datetime] NULL  DEFAULT (getdate()),
	[DataAtualizacao] [datetime] NULL,
	[Ativo] [bit] NULL   DEFAULT (1),
 CONSTRAINT [PK_Responsavel] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
