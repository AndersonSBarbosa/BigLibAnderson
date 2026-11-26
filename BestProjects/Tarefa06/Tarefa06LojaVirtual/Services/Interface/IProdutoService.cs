using Entidades;

namespace Services.Interface
{
    public interface IProdutoService
    {
        Task<Produto> CreateAsync(Produto dto);
        Task<Produto> UpdateAsync(Produto dto); 
        Task RemoveAsync(int id); 
        Task<Produto> GetAsync(int id); 
        Task<IList<Produto>> GetAllAsync();
    }
}
