import { useRouter } from 'next/router';
import axios from 'axios';

const CourseDetail = ({ course }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{course.name}</h1>
      <p>Lessons: {course.lessons}</p>
      <p>Students: {course.students}</p>
      <p>Level: {course.level}</p>
      <p>Rating: {course.rating}</p>
      {/* Display other course details here */}
      
      {/* Course Description */}
      <h2>Course Description</h2>
      <p>
        Artificial Intelligence (AI) is revolutionizing the way we live, work, and interact with technology. This comprehensive course is your gateway to understanding the fascinating world of AI, its applications, and how it's shaping the future. Whether you're a beginner with no prior AI knowledge or an experienced developer looking to expand your skills, this course offers something for everyone.
      </p>
      
      <h2>Key Topics Covered:</h2>
      <ul>
        <li>Introduction to AI</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Natural Language Processing (NLP)</li>
        <li>Computer Vision</li>
        <li>AI Ethics</li>
        <li>AI in Industry</li>
      </ul>

      <h2>Course Features:</h2>
      <ul>
        <li>Hands-On Projects</li>
        <li>Interactive Learning</li>
        <li>Expert Instructors</li>
        <li>Certification</li>
      </ul>

      <h2>Who Should Take This Course:</h2>
      <ul>
        <li>Aspiring Data Scientists and Machine Learning Engineers</li>
        <li>Software Developers Interested in AI</li>
        <li>Business Professionals Exploring AI Opportunities</li>
        <li>Anyone Curious About the Future of Technology</li>
      </ul>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const response = await axios.get(`/api/courses/${slug}`);
  const course = response.data;

  return {
    props: {
      course,
    },
  };
}

export default CourseDetail;
