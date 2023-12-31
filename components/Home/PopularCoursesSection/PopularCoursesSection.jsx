import styles from "./PopularCoursesSection.module.css";
import Heading from "../common/Heading/Heading";
import CourseCard from "../common/CourseCard/CourseCard";
import Link from "next/link";

const PopularCoursesSection = () => {
  // Define the Google Form link
  const googleFormLink = "https://forms.gle/baNQ38CCdU5ii9W99";

  return (
    <>
      <div className={styles.pop_course_section} id="courses">
        <Heading
          para1={"Explore Programs"}
          heading={"Our Most Popular Class"}
          para2={
            "Let's join our famous class, the knowledge provided will definitely be useful for you."
          }
        />

        <div className={styles.pop_course_container}>
          <CourseCard slug={"learn-figma"} />
          <CourseCard slug={"web-dev"} />
          <CourseCard slug={"ui-ux-design"} />
        </div>
        <div className={styles.btn_container}>
          {/* Use the Link component with the Google Form link */}
          <Link href={googleFormLink} passHref>
            <a className={styles.btn}>Explore All Courses</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularCoursesSection;

