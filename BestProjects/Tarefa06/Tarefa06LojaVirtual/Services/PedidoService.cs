using AutoMapper;
using Entidades;
using Entidades.Exceptions;
using Repository;
using Repository.Interface;
using Services.Interface;

namespace Services
{
    public class PedidoService : IPedidoService
    {

        private readonly IMapper _mapper;
        private readonly IPedidoRepository _pedidoRepository;

        public PedidoService(IMapper mapper, IPedidoRepository pedidoRepository)
        {
            _mapper=mapper;
            _pedidoRepository=pedidoRepository;
        }

        public IPedidoRepository pedidoRepository { get; }
        public IMapper Mapper { get; }


        public async Task<Pedidos> CreateAsync(Pedidos dto)
        {
            var addressCreated = await _pedidoRepository.CreateAsync(dto);
            return addressCreated;
        }

        public async Task<IList<Pedidos>> GetAllAsync()
        {
            var item = await _pedidoRepository.GetAllAsync();
            return item;
        }

        public async Task<Pedidos> GetAsync(int id)
        {
            var item = await _pedidoRepository.GetAsync(id);
            return item;
        }

        public async Task RemoveAsync(int id)
        {
            await _pedidoRepository.RemoveAsync(id);
        }

        public async Task<Pedidos> UpdateAsync(Pedidos dto)
        {
            var itemExists = await _pedidoRepository.GetAsync(dto.id);

            if (itemExists == null)
                throw new DomainExceptions("não existe Item com esse ID informado!");

            var itemUpdate = await _pedidoRepository.UpdateAsync(dto);

            return itemUpdate;
        }
    }
}
