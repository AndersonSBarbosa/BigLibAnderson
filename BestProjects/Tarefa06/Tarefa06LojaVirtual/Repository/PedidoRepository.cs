using Entidades;
using Repository.Context;
using Repository.Interface;

namespace Repository
{
    public class PedidoRepository : BaseRepository<Pedidos>, IPedidoRepository
    {
        private readonly ManagerContext _context;

        public PedidoRepository(ManagerContext context) : base(context)
        {
            _context=context;
        }
    }
}
