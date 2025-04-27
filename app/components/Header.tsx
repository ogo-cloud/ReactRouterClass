import { type RefObject, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSpinner,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const ref: RefObject<HTMLElement | null> = useRef<HTMLElement | null>(null);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    if (ref.current) {
      window.addEventListener("scroll", (ev) => {});
      if (scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  }, []);
  // @ts-ignore
  return (
    <header
      ref={ref}
      className={sticky ? "top-0 z-50 w-full bg-white! fixed" : "bg-red-500/5"}
    >
      <div className={"navbar"}>
        <a href={"#"}>
          <img src={"/favicon.ico"} alt={"logo"} />
        </a>

        <nav>
          <a href="#">
            <span>Product</span>
          </a>
          <a href="#">
            <span>Categorises</span>
          </a>
          <a href="#">
            <span>Trending</span>
          </a>
          <NavLink to={"/about-us"}>
            {({ isPending }) => (
              <>
                <span>About us</span>&nbsp;
                {isPending && (
                  <span>
                    <FontAwesomeIcon icon={faSpinner} spin />{" "}
                  </span>
                )}
              </>
            )}
          </NavLink>
          <a href="#">
            <span>Support</span>
          </a>
          {/*LOGIN AND SIGN UP*/}

          <NavLink to={"/login"} className={"login"}>
            {({ isPending }) => (
              <>
                <span>login</span>&nbsp;
                {isPending ? (
                  <span>
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faSignInAlt} />
                  </span>
                )}
              </>
            )}
          </NavLink>

          <NavLink to={"/signup"} className={"signup"}>
            {({ isPending }) => (
              <>
                <span>Sign up</span>&nbsp;
                {isPending ? (
                  <span>
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </span>
                )}
              </>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
