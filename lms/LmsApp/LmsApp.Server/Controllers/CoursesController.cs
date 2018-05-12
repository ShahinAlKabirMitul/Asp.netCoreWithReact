using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Common.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Model;
using Model.Repo;
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
        private IGenericService<Course, CourseRequestModel, CourseViewModel> _service;

        public CoursesController(LmsDbContext db,IGenericRepository<Course> repository,IGenericService<Course,CourseRequestModel,CourseViewModel> service)
        {
            _db = db;
            _service = service;
        } 
        [HttpPost]
        [Route("Search")]
        public async Task<IActionResult>  GetCourses([FromBody] CourseRequestModel request)
        {
            
            var courses = await _service.SearchAsync(request);
            return Ok();
        }
    }
}