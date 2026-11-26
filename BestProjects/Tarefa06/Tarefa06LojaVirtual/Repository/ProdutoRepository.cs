using Entidades;
using Repository.Context;
using Repository.Interface;

namespace Repository
{
    public class ProdutoRepository : BaseRepository<Produto>, IProdutoRepository
    {
        private readonly ManagerContext _context;

        public ProdutoRepository(ManagerContext context) : base(context)
        {
            _context=context;
        }
    }
}
