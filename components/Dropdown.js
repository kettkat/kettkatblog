import React from "react";
import Link from "next/link";

function Dropdown() {
  return (
    <li>
      <Link href="/poems/postpoem" className='dropDownStyling'>Post a Poem</Link>
    </li>
  );
}

export default Dropdown;
