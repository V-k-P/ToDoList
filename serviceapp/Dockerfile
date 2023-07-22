# FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
# WORKDIR /app
# EXPOSE 5000

# ENV ASPNETCORE_URLS=http://*:5000

# FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
# ARG configuration=Release
# WORKDIR /src
# COPY *.csproj .
# RUN dotnet restore "./serviceapp.csproj"
# COPY . .
# WORKDIR "/src"
# RUN dotnet build "serviceapp.csproj" -c $configuration -o /app/build

# FROM build AS publish
# ARG configuration=Release
# RUN dotnet publish "serviceapp.csproj" -c $configuration -o /app/publish /p:UseAppHost=false

# FROM base AS final
# WORKDIR /app
# COPY --from=publish /app/publish .
# ENTRYPOINT ["dotnet", "serviceapp.dll"]

# Learn about building .NET container images:
# https://github.com/dotnet/dotnet-docker/blob/main/samples/README.md
# FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
# WORKDIR /source

# # copy csproj and restore as distinct layers
# COPY *.csproj .
# RUN dotnet restore --use-current-runtime  

# # copy everything else and build app
# COPY . .
# RUN dotnet publish "serviceapp.csproj" -c Release -o /app/publish /p:UseAppHost=false
# # RUN dotnet publish --use-current-runtime --self-contained false --no-restore -o /app


# # final stage/image
# FROM mcr.microsoft.com/dotnet/aspnet:7.0
# WORKDIR /app
# COPY --from=build /app/publish .
# ENTRYPOINT ["dotnet", "serviceapp.dll"]

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS base
WORKDIR /app
#exposes the port 80 of container
EXPOSE 80
#set variable so that application runs on 80 in container
 ENV ASPNETCORE_URLS=http://*:80
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY *.csproj .
RUN dotnet restore "./serviceapp.csproj"
COPY . .
WORKDIR /src
RUN dotnet build "serviceapp.csproj" -c Release -o /app/build
FROM build AS publish
RUN dotnet publish "serviceapp.csproj" -c Release -o /app/publish
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "serviceapp.dll"]
