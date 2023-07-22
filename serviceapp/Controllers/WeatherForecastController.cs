using Microsoft.AspNetCore.Mvc;

namespace serviceapp.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    [HttpGet]
    public string First(){
        return "hello";

    }
    
}
