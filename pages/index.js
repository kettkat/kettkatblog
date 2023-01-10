import styles from "../styles/Home.module.css";
import Meta from "../components/Meta";
import AuthFormV2 from "../components/AuthFormV2";
import Link from "next/link";
import Head from "next/head";
import KatherineHeadshot from "../media/KatherineHeadshot.jpeg";
import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Meta
        title="Catching Up With Kat- Home Page"
        keywords="blog, katherine k, favorite reads, poems, books, travel"
        description="A peak into my life through blog"
      />
      <div>
        <div className="center">
          <h2>ABOUT &nbsp; THIS &nbsp; BLOG</h2>
        </div>
        <p>
          <b>Welcome!</b> This blog utilizes Next.js, a JavaScript based
          framework that is server side rendered. Next.js allows for faster page
          load speeds, increased image optimization, and better SEO. I made this
          blog to both practice my web programming skills, and develop a
          platform I can be creative in designing.{" "}
        </p>

        <p>
          I put a lot of thought into this blog to make it accessible,
          aesthetically pleasing, and easy to navigate. It is currently uploaded
          to a GitHub repository, and hosted by Vercel, a platform to host
          Next.Js web applications. I hope you enjoy clicking through it!
        </p>
        <p>
          {" "}
          <b>Some of the features I&apos;ve made sure to implement...</b>
        </p>
        <div className="centered-lists">
          <ul className="centered-li-tag">
            <li>
              <b>Completely responsive webpage, </b> geared toward both mobile
              and desktop viewers
            </li>
            <br />
            <li>
              <b>Hierarchical layout of element tags </b> ascending in proper
              order from h1 to h4, ensuring that screen readers are accurate and
              content is easy to scan.
            </li>
            <br />
            <li>
              <b>
                Line heights and fonts ensure that this page is easy to follow,
              </b>
              The font used is Montserrat, a geometric adaptation of sans serif
              used by many popular companies.
            </li>
            <br />
            <li>
              <b>Customized meta tags</b> for each page, allowing further search
              engine optimization
            </li>
            <br />
            <li>
              <b>
                Forms on this page are aimed to have the best user experience
              </b>
              by updating the user while filling out the form if a field cannot
              be empty, or is invalid. Submit buttons are disabled until the
              form is properly filled out to ensure that no incomplete forms are
              submitted. View
              <Link href="/poems/postpoem">
                <b> Post a Poem </b>
              </Link>
              for an example!
            </li>
            <br />
            <li>
              <b>Score of 95+ on both SEO and Accessibility </b> when running
              Google's developer tool, Lighthouse, on each page
            </li>
          </ul>
        </div>
        <h3>Here is a little more about me...</h3>
        <p>
          I love traveling, food, poetry, my sweetest bean Charlie (the cutest
          4lb yorkie), and my friends! My motto for life is that...
        </p>

        <h3>&ldquo;The more you do, the more you CAN do.&rdquo;</h3>
        <p>
          <b>My mother always instilled this in my life. </b>
          It seems simple, and it is! The main idea is to do as much as you can,
          whenever you can. The more you experience, the more skills you add to
          your toolkit. In addition, the more insight you will have on thoughts
          other than your own. Whenever I feel overwhelmed with tasks, plans,
          and activities, I remind myself I am only adding value to my life. I
          am allowing myself to know more, and DO more!
        </p>
        <p>
          This blog is just for my friends, family and myself to &ldquo;catch
          up.&rdquo; It allows allows a space for me to showcase some of the
          tools I've been learning while pursuing my degree at Grand Valley.
          Can&apos;t wait to share my thoughts, designs, and travels.
        </p>
        <div className="headshot-wrapper">
        <Image
          src={KatherineHeadshot}
          alt="Catherine Kettner Headshot image"
          title="Professional Headshot of Catherine Kettner"
          layout="responsive"
          priority="true"
          
        />
        </div>
        <h4>Katherine Kettner</h4>
        {/* <AuthFormV2 /> */}
      </div>
    </>
  );
}
