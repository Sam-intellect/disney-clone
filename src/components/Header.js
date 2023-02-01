import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <>
      <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
          <a>
            <img src="/images/home-icon.svg" />
            <span>HOME</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg" />
            <span>WATCHLSIT</span>
          </a>
          <a>
            <img src="/images/original-icon.svg" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/images/movie-icon.svg" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/images/series-icon.svg" />
            <span>SERIES</span>
          </a>
        </NavMenu>

        <Userimage />
      </Nav>
    </>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0
        right: 0;
        bottom: -6px;
      }
    }
  }
`;

const Userimage = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 25px;
  cursor: pointer;
`;
