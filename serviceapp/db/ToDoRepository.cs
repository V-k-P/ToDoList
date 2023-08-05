using Dapper;
using serviceapp.models;
using System.Runtime.CompilerServices;

namespace serviceapp.db
{
    public class ToDoRepository : SqLiteBaseRepository
    {
        public override string DbFile { get { return "./ToDo.sqlite"; } }
        public override void CreateAndOpenDb()
        {
            using (var connection = GetDBConnection()) {
                connection.Open();
                var sql = @"
                CREATE TABLE IF NOT EXISTS 
                Todo (
                    Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                    Title TEXT,
                    Description TEXT,
                    CreatedDate DATE,
                    UserID INTEGER,
                    isComplete boolean,
                    ExpiresAt date,
                    Priority interger
                );";
                connection.Execute(sql);
            }
        }

        public async Task<List<Todo>> GetAll(){
            List<Todo> todo = new List<Todo>();
            using (var connection = GetDBConnection())
            {
                connection.Open();
                var sql = @"select * from Todo;";
                todo = (await connection.QueryAsync<Todo>(sql)).ToList();
                connection.Close();
            }
            return todo;
        }

        public async Task Add(Todo todo)
        {
            using (var connection = GetDBConnection())
            {
                connection.Open();
                var sql = @"insert into todo (Title, Description,CreatedDate, UserID, isComplete, ExpiresAt, Priority)
                            values(@Title, @Description, @CreatedDate, @UserID, @isComplete, @ExpiresAt, @Priority);";
                await connection.ExecuteAsync(sql, todo);
                connection.Close();
            }
        }
    }
}
