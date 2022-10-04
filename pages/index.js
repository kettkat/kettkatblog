import styles from "../styles/Home.module.css";
import Meta from "../components/Meta";
import AuthFormV2 from "../components/AuthFormV2";
import Link from "next/link";

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
        <p><b>Welcome!</b> This blog utilizes Next.js, a JavaScript based framework. Next.js allows for faster page load speeds, and better SEO.
          I made this blog to both practice my web programming skills, and develop a platform I can be creative in designing. </p>

        <p>I put a lot of thought into this blog to make it accessible, aesthetically pleasing, and easy to navigate. It is currently uploaded to a GitHub repository, and hosted by Vercel, a platform to host Next.Js web applications.
          I hope you enjoy clicking through it!</p>
        <p> <b>Some of the features I've made sure to implement...</b></p>
        <div className="centered-lists">
        <ul className="centered-li-tag">
          <li>Completely responsive webpage, geared toward both mobile and desktop viewers</li>
          <br />
          <li>Hierarchical layout of element tags ascending in proper order from h1 to h4, ensuring that screen readers are accurate and content is easy to scan.</li>
          <br />
          <li>Line heights and fonts ensure that this page is easy to follow, and direct. The font used is Montserrat, a geometric adaptation of sans serif used by many popular companies. </li>
          <br />
          <li>Meta tags are written and customized for each page, allowing further search engine optimization</li>
          <br />
          <li>Forms on this page are aimed to have the best user experience by updating the user while filling out the form if a field cannot be empty, or is invalid.
            Submit buttons are disabled until the form is properly filled out to ensure that no incomplete forms are submitted. View <Link href='/poems/postpoem'><b>Post a Poem</b></Link> for an example!
          </li>

        </ul>
        </div>
        <p>
          <b>Here is a little more about me.</b> I love traveling, food, poetry, my sweetest bean Charlie (the cutest
          4lb yorkie), and my friends! My motto for life is that...
        </p>

        <h3>
        &ldquo;The more you do, the more you CAN do.&rdquo; My mother always instilled this in my life.
        </h3>

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
        <h4>Katherine Kettner</h4>
        {/* <AuthFormV2 /> */}
      </div>
    </>
  );
}
