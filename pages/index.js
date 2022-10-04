import styles from "../styles/Home.module.css";
import Meta from "../components/Meta";
import AuthFormV2 from "../components/AuthFormV2";

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
          <h2>ABOUT &nbsp; ME</h2>
        </div>
        <p>
          I love traveling, food, poetry, my sweetest bean Charlie (the cutest
          4lb yorkie), and my friends! My motto for life is that...
        </p>

        <h4>
        &ldquo;The more you do, the more you CAN do.&rdquo; My mother always instilled this in my life.
        </h4>

        <p>
          It seems simple.. and it is. The main idea is to do as much as you
          can, whenever you can. The more you experience, the more skills you
          add to your toolkit. In addition, the more insight you will
          have on thoughts other than your own. Whenever I feel overwhelmed with
          tasks, plans, and activities, I remind myself I am only adding value
          to my life. I am allowing myself to know more, and DO more!
        </p>
        <p>
          This blog is just for my friends, family and myself to &ldquo;catch up.&rdquo;
         Can&apos;t wait to share my thoughts and travels.
        </p>
        <h4>xoxo,</h4>
        <h4>Katherine Kettner</h4>
        <AuthFormV2 />
      </div>
    </>
  );
}
