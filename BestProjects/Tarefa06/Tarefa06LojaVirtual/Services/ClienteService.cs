using AutoMapper;
using Entidades;
using Entidades.Exceptions;
using Repository.Interface;
using Services.Interface;

namespace Services
{
    public class ClienteService : IClienteService
    {
        private readonly IMapper _mapper;
        private readonly IClienteRepository _clienteRepository;

        public ClienteService(IMapper mapper, IClienteRepository clienteRepository)
        {
            _mapper=mapper;
            _clienteRepository=clienteRepository;
        }

        public IClienteRepository clienteRepository { get; }
        public IMapper Mapper { get; }

        public async Task<Cliente> CreateAsync(Cliente dto)
        {
            var addressCreated = await _clienteRepository.CreateAsync(dto);
            return addressCreated;
        }

        public async Task<IList<Cliente>> GetAllAsync()
        {
            var item = await _clienteRepository.GetAllAsync();
            return item;
        }

        public async Task<Cliente> GetAsync(int id)
        {
            var item = await _clienteRepository.GetAsync(id);
            return item;
        }

        public async Task RemoveAsync(int id)
        {
            await _clienteRepository.RemoveAsync(id);
        }

        public async Task<Cliente> UpdateAsync(Cliente dto)
        {
            var itemExists = await _clienteRepository.GetAsync(dto.id);

            if (itemExists == null)
                throw new DomainExceptions("não existe Item com esse ID informado!");

            var itemUpdate = await _clienteRepository.UpdateAsync(dto);

            return itemUpdate;
        }
    }
}
