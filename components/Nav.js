import Link from "next/link";
import React from "react";
import MyDropdown from "./DropDownMenu";

function Nav() {
  return (
    <div className="navDynamicFont">
      <nav>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>

          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/travels">Travels</Link>
          </li>

          <li>
            <Link href="/contact">Contact Me</Link>
          </li>

          <li>
            <MyDropdown
              menuTitle="Poems"
              menuItem1="Post a Poem"
              menuItem2="Poem API"
              linkPath1="/poems/postpoem"
              linkPath2="/poems"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
