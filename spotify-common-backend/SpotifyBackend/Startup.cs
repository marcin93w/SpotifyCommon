using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SpotifyBackend.Entities;
using SpotifyBackend.Models;
using SpotifyBackend.Models.SpotifyModels.Generated;
using SpotifyBackend.Services;

namespace SpotifyBackend
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IConfiguration>(Configuration);

            services.AddScoped<IPlaylistRepository, PlaylistRepository>();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseExceptionHandler(appBuilder =>
            {
                appBuilder.Run(async context =>
                {
                    var exceptionHandleFeature = context.Features.Get<IExceptionHandlerFeature>();
                    if (exceptionHandleFeature != null)
                    {
                        var logger = loggerFactory.CreateLogger("Global exception logger.");
                        logger.LogError(500, exceptionHandleFeature.Error, exceptionHandleFeature.Error.Message);
                    }

                    context.Response.StatusCode = 500;
                    await context.Response.WriteAsync("Unexpected server error. Please, try again later.");
                });
            });

            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<TrackEntity, TrackForReturnDto>()
                    .ForMember(dest => dest.Rate,
                        opt => opt.MapFrom(src =>
                            src.Rates.Average(item => item.Value)));
            });

            app.UseMvc();
        }
    }
}
