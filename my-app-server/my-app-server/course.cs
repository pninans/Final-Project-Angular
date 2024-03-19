using static System.Net.Mime.MediaTypeNames;
using System.Xml.Linq;

//using System.Collections.Generic;

//namespace my_app_server
//{
//    public  enum LearningMode
//    {
//        Frontal,
//        Zoom
//    }

//    public class Course
//    {
//        public int Code { get; set; }
//        public string Name { get; set; }
//        public string CategoryCode { get; set; }
//        public string LessonCount { get; set; }
//        public string StartDate { get; set; }
//        public List<string> Syllabus { get; set; }
//        public LearningMode LearningMode { get; set; }
//        public string InstructorCode { get; set; }
//        public string Image { get; set; }
//    }
//}



using static System.Net.Mime.MediaTypeNames;
using System.Xml.Linq;

using System.Collections.Generic;
using System.ComponentModel;

namespace my_app_server
{
    public enum LearningMode
    {
        Frontal,
        Zoom
    }

    public class Course
    {
        public int Code { get; set; }
        public string Name { get; set; }
        public Category Category { get; set; }
        public int LessonCount { get; set; }
        public DateTime StartDate { get; set; }
        public List<string> Syllabus { get; set; }
        public LearningMode LearningMode { get; set; }
        public string InstructorCode { get; set; }
        public string Image { get; set; }
    }
}
