//ourdomain.com/
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profilePic from "../media/katherinekettner.jpg";
import Meta from "../components/Meta";

export default function HomePage() {
  return (
    <>
      <Meta
        title="Home Page"
        keywords="blog, katherine k, favorite reads, poems, books, travel"
        description="A peak into my life through blog"
      />
      <div>
        <div className="center">
          <h1>A Little About Me</h1>
        </div>
        <p>
          I love traveling, food, poetry, my sweetest bean Charlie (the cutest
          4lb yorkie), and my friends! My motto for life is that...
        </p>

        <h3>
          "The more you do, the more you CAN do." Kudos to my mother for
          instilling this in my life.
        </h3>

        <p>
          It seems simple.. and it is. The main idea is to do as much as you
          can, whenever you can. The more you experience, the more skills you
          will add to your life toolkit. In addition, the more insight you will
          have on thoughts other than your own. Whenever I feel overwhelmed with
          tasks, plans, and activities, I remind myself I am only adding value
          to my life. I'm allowing myself to know more, and DO more!
        </p>
        <p className={styles.cssbold}>What's the purpose of this blog?</p>
        <p>
          This blog is just for my friends, family and myself to "catch up."
          Nothing crazy! Can't wait to share my thoughts and travels.
        </p>
        {/* <div className={styles.center}>
            <Image
              className={styles.photoresize}
              src={profilePic}
              alt="Picture profile of Katherine"
            />
          </div> */}
        <p>
          <span class="cssbold">XOXO,</span>
        </p>

        <span class="cursive">Katherine Kettner</span>
      </div>
    </>
  );
}
