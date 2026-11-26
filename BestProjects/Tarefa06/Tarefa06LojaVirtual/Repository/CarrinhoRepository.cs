using Entidades;
using Repository.Context;
using Repository.Interface;
using System.Net;

namespace Repository
{
    public class CarrinhoRepository : BaseRepository<Carrinho>, ICarrinhoRepository
    {
        private readonly ManagerContext _context;

        public CarrinhoRepository(ManagerContext context) : base(context)
        {
            _context=context;
        }
    }
}
