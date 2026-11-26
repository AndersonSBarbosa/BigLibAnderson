USE FAMPE_NOVO
GO

DECLARE @AlteracoesEsperadas INT = 8;
DECLARE @RegistrosAfetados INT = 0;

;DISABLE TRIGGER TR_ALTERA_OPERACOES ON OPERACOES

BEGIN TRAN

UPDATE OPERACOES
SET OPE_CODIGOBANCOANTERIOR = '    '	    
   ,OPE_CODIGOAGENCIAANTERIOR = '     '
FROM OPERACOES
WHERE OPE_NROOPERACAO IN (
'56734',
'55962',
'48134',
'48131'
)

SET @RegistrosAfetados = @RegistrosAfetados + @@ROWCOUNT

IF (@AlteracoesEsperadas = @RegistrosAfetados)
BEGIN			
	SELECT 'Script executado com sucesso!' AS Resultado
	COMMIT TRAN
END
ELSE
BEGIN	
	SELECT 'Script no foi executado com sucesso! Deveriam ter sido afetados ' + LTRIM(STR(@AlteracoesEsperadas)) + ' registros, mas foram afetados: ' + LTRIM(STR(@RegistrosAfetados)) + CHAR(13) + 
		   'Favor entrar em contato com o relator do chamado.' AS Resultado
	ROLLBACK TRAN
END

;ENABLE TRIGGER TR_ALTERA_OPERACOES ON OPERACOES
