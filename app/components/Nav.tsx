"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {pathname.startsWith("/profile") ? (
        <>
          <Link
            className={`${styles.link} ${
              pathname === "/profile" ? styles.active : ""
            }`}
            href="/profile"
          >
            Profile
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === "/profile/users" ? styles.active : ""
            }`}
            href="/profile/users"
          >
            Users
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === "/profile/categories" ? styles.active : ""
            }`}
            href="/profile/categories"
          >
            Categories
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === "/profile/add/category" ? styles.active : ""
            }`}
            href="/profile/add/category"
          >
            Add Category
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === "/profile/add/product" ? styles.active : ""
            }`}
            href="/profile/add/product"
          >
            Add Product
          </Link>

          <Link
            className={`${styles.link} ${
              pathname === "/profile/settings" ? styles.active : ""
            }`}
            href="/profile/settings"
          >
            Settings
          </Link>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};
