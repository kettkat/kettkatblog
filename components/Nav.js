import Link from "next/link";
import React from "react";
import { useState } from "react";
//import MyDropdown from "./DropDownMenu";
import Dropdown from "./Dropdown";

function Nav() {
  const [dropdown, setDropDown] = useState(false);

  function dropDownHandler() {
    if (dropdown == true) {
      setDropDown(false)
    } else {
      setDropDown(true)
    }
  }

  return (
    <nav>
      <ul>
        <li>
          <Link href="/blog">Portfolio</Link>
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
          <Link href='/poems'>Poems</Link>
        </li>
        <li>
          <Link href='/poems/postpoem'>Post a Poem</Link>
        </li>

        {/* <li>
            <MyDropdown
              menuTitle="Poems"
              menuItem1="Post a Poem"
              menuItem2="Poem API"
              linkPath1="/poems/postpoem"
              linkPath2="/poems"
            />
          </li> */}
        {/* <li onClick={dropDownHandler}>
          <Link href="/poems">Poem API</Link>
          {dropdown && <Dropdown />}
        </li> */}
 
      </ul>
    </nav>
  );
}

export default Nav;
