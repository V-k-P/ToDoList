using Dapper;
using Microsoft.Data.Sqlite;
using System.Configuration;

namespace serviceapp.db
{
    public abstract class SqLiteBaseRepository
    {
        private static SqliteConnection _dbConnection;
        public abstract string DbFile { get;}
        public abstract void CreateAndOpenDb();
        public SqliteConnection GetDBConnection()
        {
            return new SqliteConnection("Data Source=" + DbFile);
        }
    }
}
