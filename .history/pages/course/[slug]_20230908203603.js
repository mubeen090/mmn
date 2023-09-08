// pages/course/[slug].js
import { useRouter } from 'next/router';
import axios from 'axios';

const CourseDetail = ({ course }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{course.name}</h1>
      {/* Display other course details here */}
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
