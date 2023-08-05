using Microsoft.AspNetCore.Mvc;
using serviceapp.db;
using serviceapp.models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serviceapp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private ToDoRepository repository;
        public TodoController() { 
            repository = new ToDoRepository();
        }
        // GET: api/<TodoController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<Todo> todos = new();
            try
            {
                todos = await repository.GetAll();
            }
            catch (Exception ex) { 
                return NotFound(ex.Message);
            }
            return Ok(todos);
        }

        // GET api/<TodoController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TodoController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Todo todo)
        {
            try
            {
                await repository.Add(todo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Ok();
        }

        // PUT api/<TodoController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TodoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
