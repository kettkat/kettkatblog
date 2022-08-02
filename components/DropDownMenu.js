import { Menu } from "@headlessui/react";

function MyDropdown({ menuTitle, menuItem1, menuItem2, linkPath1, linkPath2 }) {
  return (
    <Menu>
      <Menu.Button
        style={{
          fontWeight: "bold",
          padding: 0,
          margin: 0,
          paddingBottom: 10,
        }}
      >
        {menuTitle}
      </Menu.Button>
      <br />
      <Menu.Items>
        {/* Use the `active` render prop to conditionally style the active item. */}
        <Menu.Item>
          {({ active }) => (
            <a href={linkPath1} style={{ fontWeight: "bold", fontSize: 18 }}>
              {menuItem1}
            </a>
          )}
        </Menu.Item>
        <br />
        <br />
        <Menu.Item>
          {({ active }) => (
            <a href={linkPath2} style={{ fontWeight: "bold", fontSize: 18 }}>
              {menuItem2}
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default MyDropdown;
