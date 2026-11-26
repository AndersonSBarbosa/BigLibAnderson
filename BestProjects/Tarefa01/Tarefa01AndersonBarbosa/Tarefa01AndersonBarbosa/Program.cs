using System;
class MainClass
{
    public static void Main(string[] args)
    {

        Console.WriteLine("Sequência Fibonacci.");
        int N;
        Console.WriteLine("Insira número inteiro para criar a sequencia definida");
        N=int.Parse(Console.ReadLine());//em execução quero que o console só aceite números inteiros do teclado.

        int nAnterior = 0;
        int nAtual = 1;
        int fibonacci;


        Console.WriteLine("A sequência de Fibonacci é:");
        Console.WriteLine("___________________________");

        for (int i = 0; i <N; i++)
        {
            fibonacci = nAnterior + nAtual;
            Console.WriteLine(fibonacci);
            nAnterior = nAtual;
            nAtual = fibonacci;
        }



    }
}