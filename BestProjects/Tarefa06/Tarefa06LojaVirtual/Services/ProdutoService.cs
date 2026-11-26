using AutoMapper;
using Entidades;
using Entidades.Exceptions;
using Repository.Interface;
using Services.Interface;

namespace Services
{
    public class ProdutoService : IProdutoService
    {
        private readonly IMapper _mapper;
        private readonly IProdutoRepository _produtoRepository;

        public ProdutoService(IMapper mapper, IProdutoRepository produtoRepository)
        {
            _mapper=mapper;
            _produtoRepository=produtoRepository;
        }

        public IProdutoRepository produtoRepository { get; }
        public IMapper Mapper { get; }


        public async Task<Produto> CreateAsync(Produto dto)
        {
            var addressCreated = await _produtoRepository.CreateAsync(dto);
            return addressCreated;
        }

        public async Task<IList<Produto>> GetAllAsync()
        {
            var item = await _produtoRepository.GetAllAsync();
            return item;
        }

        public async Task<Produto> GetAsync(int id)
        {
            var item = await _produtoRepository.GetAsync(id);
            return item;
        }

        public async Task RemoveAsync(int id)
        {
            await _produtoRepository.RemoveAsync(id);
        }

        public async Task<Produto> UpdateAsync(Produto dto)
        {
            var itemExists = await _produtoRepository.GetAsync(dto.id);

            if (itemExists == null)
                throw new DomainExceptions("não existe Item com esse ID informado!");

            var itemUpdate = await _produtoRepository.UpdateAsync(dto);

            return itemUpdate;
        }
    }
}
