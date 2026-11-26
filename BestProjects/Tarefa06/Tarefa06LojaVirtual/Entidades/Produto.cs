namespace Entidades
{
    public class Produto : Base
    {
        public Produto(string nomeProduto, string descricao, string imagem, float valor, int quantidadeEstoque)
        {
            NomeProduto=nomeProduto;
            Descricao=descricao;
            Imagem=imagem;
            Valor=valor;
            QuantidadeEstoque=quantidadeEstoque;
        }

        public string NomeProduto { get; set; }
        public string Descricao { get; set; }
        public string Imagem { get; set; }
        public float Valor { get; set; }
        public int QuantidadeEstoque { get; set; }
    }
}
