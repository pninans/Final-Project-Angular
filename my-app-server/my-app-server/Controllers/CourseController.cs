//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Xml.Linq;
//using static System.Net.Mime.MediaTypeNames;
//// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

//namespace my_app_server.Controllers
//{

//    [Route("api/[controller]")]
//    [ApiController]
//    public class CourseController : ControllerBase
//    {
//        public static List<Course> courseList = new List<Course>
//        {
//          new Course
//          {
//               Code=1,
//               Name="Angular",
//               CategoryCode="123",
//               LessonCount="35",
//               StartDate="01.01.24",
//               Syllabus = new List<string>
//               {
//                "input",
//                "output",
//                "bootstrap",
//                "Router"
//               },
//               LearningMode=0,
//               InstructorCode="7894",
//               Image=""
//          },
//          new Course
//          {
//               Code=2,
//               Name="React",
//               CategoryCode="789",
//               LessonCount="28",
//               StartDate="01.01.24",
//               Syllabus = new List<string>
//               {
//                "observable",
//                "material MUI",
//                "hooks",
//                "MOBX"
//               },
//               LearningMode=0,
//               InstructorCode="7894",
//               Image=""
//          },
//           new Course
//          {
//               Code=3,
//               Name="innovation",
//               CategoryCode="456",
//               LessonCount="12",
//               StartDate="01.01.24",
//               Syllabus = new List<string>
//               {
//                "Docker",
//                "Git",
//                "AWS",
//                "Google Cloud"
//               },
//               LearningMode=0,
//               InstructorCode="4586",
//               Image=""
//          }
//};
//        // GET: api/<CourseController>
//        [HttpGet]
//        public IEnumerable<Course> Get()
//        {
//            return courseList;
//        }

//        // GET api/<CourseController>/5
//        [HttpGet("{id}")]
//        public string Get(int id)
//        {
//            return "value";
//        }

//        // POST api/<CourseController>
//        [HttpPost]
//        public void Post([FromBody] List<Course> course)
//        {
//            courseList = course;
//        }

//        // PUT api/<CourseController>/5
//        [HttpPut("{id}")]
//        public void Put(int code, [FromBody] Course course)
//        {
//            int index = courseList.FindIndex(c => c.Code == code);
//            courseList[index] = course;
//        }

//        // DELETE api/<CourseController>/5
//        [HttpDelete("{id}")]
//        public void Delete(int code)
//        {
//            int index = courseList.FindIndex(c => c.Code == code);
//            if (index < 0)
//                return;
//            courseList.Remove(courseList[index]);
//        }
//    }
//}





using Microsoft.AspNetCore.Mvc;
using System;
using System.Xml.Linq;
using static System.Net.Mime.MediaTypeNames;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace my_app_server.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        public static List<Course> courseList = new List<Course>
        {
          new Course
          {
               Code=1,
               Name="Angular",
               Category=new Category{Code = 1,IconRoute= "Angular.png" ,Name ="web"},
               LessonCount=35,
               StartDate = new DateTime(2024, 1, 1, 0, 0, 0),
               Syllabus = new List<string>
               {
                "input",
                "output",
                "bootstrap",
                "Router"
               },
               LearningMode=LearningMode.Frontal,
               InstructorCode="1",
               Image="Angular.jpg"
          },
          new Course
          {
               Code=2,
               Name="React",
               Category=new Category{Code = 2,IconRoute= "React.png" ,Name ="web"},
               LessonCount=28,
               StartDate=new DateTime(2024, 3, 15, 0, 0, 0),
               Syllabus = new List<string>
               {
                "observable",
                "material MUI",
                "hooks",
                "MOBX"
               },
               LearningMode=LearningMode.Zoom,
               InstructorCode="2",
               Image="React.jpg"
          },
           new Course
          {
               Code=3,
               Name="innovation",
               Category=new Category{Code = 3,IconRoute= "Innovation.png" ,Name ="technologies"},
               LessonCount=12,
               StartDate=new DateTime(2024, 3, 11, 0, 0, 0),
               Syllabus = new List<string>
               {
                "Docker",
                "Git",
                "AWS",
                "Google Cloud"
               },
               LearningMode=LearningMode.Frontal,
               InstructorCode="3",
               Image="Innovation.jpg"
          }
};
        // GET: api/<CourseController>
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return courseList;
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Course temp = courseList.Find(x => x.Code == id);
            if (temp == null)
                return NotFound("course not found");
            return Ok(temp);
        }

        // POST api/<CourseController>
        [HttpPost]
        //public void Post([FromBody] List<Course> course)
        //{
        //    courseList = course;
        //}
        public void Post([FromBody] Course course)
        {
     
            courseList.Add(course);
        }


        // PUT api/<CourseController>/5
        [HttpPut]
        public void Put(int code, [FromBody] Course course)
        {
            Course existingCourse = courseList.FirstOrDefault(c => c.Code == code);
            if (existingCourse != null)
            {
                existingCourse.Name = course.Name;
                existingCourse.Category = course.Category;
                existingCourse.LessonCount = course.LessonCount;
                existingCourse.StartDate = course.StartDate;
                existingCourse.Syllabus = course.Syllabus;
                existingCourse.LearningMode = course.LearningMode;
                existingCourse.InstructorCode = course.InstructorCode;
                existingCourse.Image = course.Image;
            }
            else
            {
                courseList.Add(course);
            }
        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public void Delete(int code)
        {
            int index = courseList.FindIndex(c => c.Code == code);
            if (index < 0)
                return;
            courseList.Remove(courseList[index]);
        }
    }
}
