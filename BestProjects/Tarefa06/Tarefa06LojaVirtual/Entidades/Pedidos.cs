namespace Entidades
{
    public class Pedidos : Base
    {
        public Pedidos(float total, int statusId)
        {
            Total=total;
            StatusId=statusId;
        }

        public int ClienteId { get; set; }
        public float Total { get; set; }
        public int StatusId { get; set; }
    }
}
