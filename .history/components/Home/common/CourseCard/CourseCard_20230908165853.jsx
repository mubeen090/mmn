import Image from "next/image";
import styles from "./CourseCard.module.css"; // Import the CSS module
import Link from "next/link";
import course from "../../../../public/assets/courseCard/course.png";
import lessons from "../../../../public/assets/courseCard/lessons.png";
import level from "../../../../public/assets/courseCard/level.png";
import rating4 from "../../../../public/assets/courseCard/rating4.png";
import students from "../../../../public/assets/courseCard/students.png";
<button className={styles.view_more_btn}>View More</button>

const CourseCard = ({ slug }) => {
  return (
    <>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={course}
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>
          Learn Figma - artificial intelligence
        </h1>
        <div className={styles.stats_contianer}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson : 120+
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            Student : 2000
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Beginner TO Advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>
    </>
  );
};

const CourseList = () => {
  return (
    <>
      <div className={styles.course_list}>
        <CourseCard slug="machine-learning" />
        <CourseCard slug="cyber-security" />
        <CourseCard slug="data-science" />
        <Link href="/view-more">
          <button className={styles.view_more_btn}>View More</button>
        </Link>
      </div>
    </>
  );
};

export default CourseList;
