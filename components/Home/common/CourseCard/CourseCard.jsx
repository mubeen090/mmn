import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";

const courseData = [
  {
    slug: "ai",
    name: "Artificial Intelligence",
    image: "/assets/courseCard/ai.png",
    lessons: "120+",
    students: 2000,
    level: "Beginner TO Advance level",
    rating: 4,
  },
  {
    slug: "ml",
    name: "Machine Learning",
    image: "/assets/courseCard/ml.png",
    lessons: "80+",
    students: 1500,
    level: "Intermediate",
    rating: 4.5,
  },
  {
    slug: "cyber-security",
    name: "Cyber Security",
    image: "/assets/courseCard/cyber-security.png",
    lessons: "150+",
    students: 2500,
    level: "Advanced",
    rating: 5,
  },
  {
    slug: "data-science",
    name: "Data Science",
    image: "/assets/courseCard/data-science.png",
    lessons: "90+",
    students: 1800,
    level: "Intermediate",
    rating: 4.2,
  },
  {
    slug: "big-data",
    name: "Big Data",
    image: "/assets/courseCard/big-data.png",
    lessons: "100+",
    students: 2200,
    level: "Intermediate",
    rating: 4.3,
  },
  {
    slug: "oracle",
    name: "Oracle",
    image: "/assets/courseCard/oracle.png",
    lessons: "70+",
    students: 1200,
    level: "Intermediate",
    rating: 4.0,
  },
  {
    slug: "sap",
    name: "SAP",
    image: "/assets/courseCard/sap.png",
    lessons: "60+",
    students: 1000,
    level: "Beginner",
    rating: 3.8,
  },
  {
    slug: "power-bi",
    name: "Power BI",
    image: "/assets/courseCard/power-bi.png",
    lessons: "50+",
    students: 800,
    level: "Beginner TO Intermediate",
    rating: 3.7,
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    image: "/assets/courseCard/digital-marketing.png",
    lessons: "110+",
    students: 1900,
    level: "Intermediate",
    rating: 4.1,
  },
  {
    slug: "devops",
    name: "DevOps",
    image: "/assets/courseCard/devops.png",
    lessons: "70+",
    students: 1300,
    level: "Intermediate",
    rating: 4.0,
  },
  {
    slug: "java",
    name: "Java",
    image: "/assets/courseCard/java.png",
    lessons: "100+",
    students: 1800,
    level: "Intermediate",
    rating: 4.2,
  },
  {
    slug: "web-development",
    name: "Web Development",
    image: "/assets/courseCard/web-development.png",
    lessons: "120+",
    students: 2000,
    level: "Beginner TO Advance level",
    rating: 4,
  },
  {
    slug: "tally",
    name: "Tally",
    image: "/assets/courseCard/tally.png",
    lessons: "60+",
    students: 1100,
    level: "Beginner",
    rating: 3.6,
  },
];

const CourseCard = ({ course }) => {
  const { slug, name, image, lessons, students, level, rating } = course;

  return (
    <div className={styles.course_card}>
      <div className={styles.course_image_container}>
        <Image src={image} width={340} height={240} className={styles.course_image} />
      </div>
      <h1 className={styles.heading}>{name}</h1>
      <div className={styles.stats_contianer}>
        <div className={styles.stats}>
          <Image src="/assets/courseCard/lessons.png" />
          Lesson: {lessons}
        </div>
        <div className={styles.stats}>
          <Image src="/assets/courseCard/students.png" />
          Student: {students}
        </div>
        <div className={styles.stats}>
          <Image src="/assets/courseCard/level.png" />
          {level}
        </div>
      </div>
      <div className={styles.btn_rating}>
        <Link href={`/course/${slug}`}>
          <button className={styles.btn}>Start Course {">"}</button>
        </Link>
        <Image src={`/assets/courseCard/rating${rating}.png`} />
      </div>
    </div>
  );
};

const CourseList = () => {
  return (
    <div className={styles.course_list}>
      {courseData.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
      <Link href="/view-more">
        <button className={styles.view_more_btn}>View More</button>
      </Link>
    </div>
  );
};

export default CourseList;
