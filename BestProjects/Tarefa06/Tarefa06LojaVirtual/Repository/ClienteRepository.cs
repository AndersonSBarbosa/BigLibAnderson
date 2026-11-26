using Entidades;
using Repository.Context;
using Repository.Interface;

namespace Repository
{
    public class ClienteRepository : BaseRepository<Cliente>, IClienteRepository
    {
        private readonly ManagerContext _context;

        public ClienteRepository(ManagerContext context) : base(context)
        {
            _context=context;
        }
    }
}
