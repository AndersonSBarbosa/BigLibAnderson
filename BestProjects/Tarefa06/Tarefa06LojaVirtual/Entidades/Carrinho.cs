namespace Entidades
{
    public class Carrinho : Base
    {
        public Carrinho(int pedidoId, int produtoId, int quantidade, float valorUnitario)
        {
            PedidoId=pedidoId;
            ProdutoId=produtoId;
            Quantidade=quantidade;
            ValorUnitario=valorUnitario;
        }

        public int PedidoId { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }
        public float ValorUnitario { get; set; }
    }
}
