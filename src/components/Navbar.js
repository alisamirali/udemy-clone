import React from "react";
import styled from "styled-components";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/sidebar_context";
import { useCartContext } from "../context/cart_context";
import udemyLogo from "../assets/images/logo_udemy.png";

const Navbar = () => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();

  return (
    <NavbarWrapper className="bg-white flex">
      <div className="container w-100">
        <div className="brand-and-toggler flex flex-between w-100">
          <Link to="/" className="navbar-brand">
            <img src={udemyLogo} alt="Udemy Logo" />
          </Link>

          <div className="navbar-btns flex">
            <Link to="/cart" className="cart-btn">
              <MdShoppingCart size={30} />
              <span className="item-count-badge">{total_items}</span>
            </Link>
            <button
              type="button"
              className="sidebar-open-btn"
              onClick={() => openSidebar()}
            >
              <MdMenu size={30} />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99998;
  height: 75px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand {
  }
  .cart-btn {
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge {
      background-color: var(--clr-primary);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .navbar-btns {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    justify-content: center;
  }

  .sidebar-open-btn {
    transition: all 300ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Navbar;
