using Entidades;
using Microsoft.EntityFrameworkCore;


namespace Repository.Context
{
    public class ManagerContext : DbContext
    {

        public ManagerContext()
        { }

        public ManagerContext(DbContextOptions<ManagerContext> options) : base(options)
        { }

        public virtual DbSet<Carrinho> Carrinho { get; set; }
        public virtual DbSet<Cliente> Cliente { get; set; }
        public virtual DbSet<Pedidos> Pedido { get; set; }
        public virtual DbSet<Produto> Produto { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    => optionsBuilder.UseSqlServer();
    }
}
