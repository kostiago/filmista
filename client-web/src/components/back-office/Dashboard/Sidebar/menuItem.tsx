import Link from "next/link";
import styles from "./sidebar.module.scss";
import { TbLayoutDashboard } from "react-icons/tb";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

interface MenuItemProps {
  name: String;
  subMenus?: MenuItemProps[];
}

const MenuItem = (props: MenuItemProps) => {
  const { name, subMenus } = props;
  return (
    <li className={styles.menuItem}>
      <Link href={"/dashboard"}>
        <div className={styles.menuIcon}>
          <AiOutlineVideoCameraAdd />
        </div>
        <span>{name}</span>
      </Link>

      {subMenus && subMenus.length > 0 ? (
        <ul className={styles.subMenu}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <Link href={""}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
