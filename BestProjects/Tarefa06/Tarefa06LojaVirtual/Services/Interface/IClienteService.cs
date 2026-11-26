using Entidades;

namespace Services.Interface
{
    public interface IClienteService
    {
        Task<Cliente> CreateAsync(Cliente dto);
        Task<Cliente> UpdateAsync(Cliente dto);
        Task RemoveAsync(int id); 
        Task<Cliente> GetAsync(int id);
        Task<IList<Cliente>> GetAllAsync();
    }
}
