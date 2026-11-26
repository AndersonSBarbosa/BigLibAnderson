using Entidades;

namespace Services.Interface
{
    public interface IPedidoService
    {
        Task<Pedidos> CreateAsync(Pedidos dto);
        Task<Pedidos> UpdateAsync(Pedidos dto);
        Task RemoveAsync(int id);
        Task<Pedidos> GetAsync(int id);
        Task<IList<Pedidos>> GetAllAsync();
    }
}
