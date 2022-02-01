# Client

### Add google Authentication
[Creating project in google console](https://console.cloud.google.com)
To add google login in react package -
Run command `npm install react-google-login`

### Add React Redux & Toolkit
[Usage Summary](https://redux.js.org/tutorials/quick-start)
Run Command `npm install @reduxjs/toolkit react-redux`


# Server
### Add Extension
`C#`
TO add referece `vscode-solution-explorer`
### Dotnet core
To add context for entities location server\entities -
Run Command  `dotnet add package Microsoft.EntityFrameworkCore`

### ImpLink
https://dotnet.microsoft.com/learn/aspnet/hello-world-tutorial/create

### Create new web api project in dotnet core
`dotnet new webapi -n api`
`cd api`
`dotnet run`

### EntityFramework in memory
`dotnet add package Microsoft.EntityFrameworkCore.InMemory`

### addcors
`builder.Services.AddCors(option => {
    option.AddPolicy(name: MyAllowSpecificOrigins,
    builder => {
        builder.WithOrigins("http://localhost:5298", "https://localhost:7178");
    });
});

app.UseCors(MyAllowSpecificOrigins);
`

### Add developer certificate
`dotnet dev-certs https --trust`

### Create a class library project
CMD - `dotnet new classlib -o initializer`
