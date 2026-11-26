using AutoMapper;
using Entidades;
using Entidades.Exceptions;
using Repository.Interface;
using Services.Interface;

namespace Services
{
    public class CarrinhoService : ICarrinhoService
    {
        private readonly IMapper _mapper;
        private readonly ICarrinhoRepository _carrinhoRepository;

        public CarrinhoService(IMapper mapper, ICarrinhoRepository carrinhoRepository)
        {
            _mapper=mapper;
            _carrinhoRepository=carrinhoRepository;
        }

        public ICarrinhoRepository carrinhoRepository { get; }
        public IMapper Mapper { get; }

        public async Task<Carrinho> CreateAsync(Carrinho dto)
        {
            var addressCreated = await _carrinhoRepository.CreateAsync(dto);
            return addressCreated;
        }

        public async Task<IList<Carrinho>> GetAllAsync()
        {
            var item = await _carrinhoRepository.GetAllAsync();
            return item;
        }

        public async Task<Carrinho> GetAsync(int id)
        {
            var item = await _carrinhoRepository.GetAsync(id);
            return item;
        }

        public async Task RemoveAsync(int id)
        {
            await _carrinhoRepository.RemoveAsync(id);
        }

        public async Task<Carrinho> UpdateAsync(Carrinho dto)
        {
            var itemExists = await _carrinhoRepository.GetAsync(dto.id);

            if (itemExists == null)
                throw new DomainExceptions("não existe Item com esse ID informado!");

            var itemUpdate = await _carrinhoRepository.UpdateAsync(dto);

            return itemUpdate;
        }
    }
}
