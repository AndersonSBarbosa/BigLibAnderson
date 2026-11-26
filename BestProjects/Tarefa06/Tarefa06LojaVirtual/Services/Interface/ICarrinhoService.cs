using Entidades;

namespace Services.Interface
{
    public interface ICarrinhoService
    {
        Task<Carrinho> CreateAsync(Carrinho dto);
        Task<Carrinho> UpdateAsync(Carrinho dto);
        Task RemoveAsync(int id); 
        Task<Carrinho> GetAsync(int id);
        Task<IList<Carrinho>> GetAllAsync();
    }
}
