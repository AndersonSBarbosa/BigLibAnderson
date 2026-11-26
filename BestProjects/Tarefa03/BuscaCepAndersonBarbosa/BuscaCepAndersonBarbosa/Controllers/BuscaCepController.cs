using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BuscaCepAndersonBarbosa.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BuscaCepController : ControllerBase
    {



        [HttpGet]
        [Route("/api/v1/BuscaCep")]
        public async Task<IActionResult> BuscaCep([FromQuery] string cep)
        {

            string Url = "https://viacep.com.br/ws/";

            var newUrl = Url + cep + "/json";

            HttpClient client = new HttpClient();
            var response = client.GetAsync(newUrl).Result;

            if (response.IsSuccessStatusCode)
            {
                var req = response.Content.ReadAsStringAsync().Result;
                var ceplocalization = JsonConvert.DeserializeObject<ResultBusca>(req);

                if (ceplocalization.CEP != null)
                {
                    return Ok(ceplocalization);
                }
                else
                {
                    return NotFound("Nenhum endereço foi encontrado de acordo como CEP informado.");
                }
                
            }
            else
            {
                return NotFound("Nenhum endereço foi encontrado de acordo como CEP informado.");
            }
        }


    }
}
