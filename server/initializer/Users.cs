using entities;

namespace initializer;

public static class UserData 
{
    public static IList<User> Seed()
    {
        return new List<User> 
        {
            new User { Id=1, FirstName="test1", LastName="test1Last", Email="test1@g.co", Mobile=9889465145, Profile="1.jpg", Dob=DateTime.Now},
            new User { Id=2, FirstName="test2", LastName="test2Last", Email="test2@g.co", Mobile=9889465142, Profile="2.jpg", Dob=DateTime.Now},
            new User { Id=3, FirstName="test3", LastName="test3Last", Email="test3@g.co", Mobile=9889465143, Profile="3.jpg", Dob=DateTime.Now},
            new User { Id=4, FirstName="test4", LastName="test4Last", Email="test4@g.co", Mobile=9889465144, Profile="1.jpg", Dob=DateTime.Now},
            new User { Id=5, FirstName="test5", LastName="test5Last", Email="test5@g.co", Mobile=9889465145, Profile="2.jpg", Dob=DateTime.Now},
            new User { Id=6, FirstName="test6", LastName="test6Last", Email="test6@g.co", Mobile=9889465146, Profile="3.jpg", Dob=DateTime.Now},
            new User { Id=7, FirstName="test7", LastName="test7Last", Email="test7@g.co", Mobile=9889465147, Profile="2.jpg", Dob=DateTime.Now},
            new User { Id=8, FirstName="test8", LastName="test8Last", Email="test8@g.co", Mobile=9889465148, Profile="3.jpg", Dob=DateTime.Now},
            new User { Id=9, FirstName="test9", LastName="test9Last", Email="test9@g.co", Mobile=9889465149, Profile="1.jpg", Dob=DateTime.Now},
            new User { Id=10, FirstName="test10", LastName="test10Last", Email="test10@g.co", Mobile=9889465110, Profile="2.jpg", Dob=DateTime.Now},
        };
    }
}