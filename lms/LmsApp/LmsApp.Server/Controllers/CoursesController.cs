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
    
        private GenericService<Course, CourseRequestModel, CourseViewModel> _service;

        public CoursesController(IGenericService<Course,CourseRequestModel,CourseViewModel> service)
        {
         
            _service = service as GenericService<Course, CourseRequestModel, CourseViewModel>;
        } 
        [HttpPost]
        [Route("Search")]
        public async Task<IActionResult>  GetCourses([FromBody] CourseRequestModel request)
        {
            
            var courses = await _service.SearchAsync(request);
            return Ok(courses);
        }
    }
}