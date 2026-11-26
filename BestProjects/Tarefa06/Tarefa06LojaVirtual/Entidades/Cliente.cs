namespace Entidades
{
    public class Cliente : Base
    {
        public Cliente(string nomeCompleto, string email)
        {
            NomeCompleto=nomeCompleto;
            Email=email;
        }

        public string NomeCompleto { get; set; }
        public string Email { get; set; }
    }
}
