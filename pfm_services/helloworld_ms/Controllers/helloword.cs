using Microsoft.AspNetCore.Mvc;
namespace HelloWorld_ms.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get()
        {
            return "Hello, World!";
        }
    }
}