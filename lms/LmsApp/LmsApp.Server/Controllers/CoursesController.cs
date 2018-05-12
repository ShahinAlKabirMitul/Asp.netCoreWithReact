﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Common.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Model;
using RequestModel;
using Service;
using ViewModel;

namespace LmsApp.Server.Controllers
{
    [Produces("application/json")]
    [Route("api/Courses")]
    public class CoursesController : Controller
    {
        private readonly LmsDbContext _db;

        public CoursesController(LmsDbContext db)
        {
            _db = db;
        }
        [HttpPost]
        [Route("Search")]
        public async Task<IActionResult>  GetCourses([FromBody] CourseRequestModel request)
        {
             BaseRepository<Course> repository = new BaseRepository<Course>(_db);
            CourseService service = new CourseService(repository);
            var courses = await service.SearchAsync(request);
            return Ok();
        }
    }
}