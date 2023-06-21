import React from 'react';

import styles from "./Header.module.css";
import logoIcon from "../../images/logo.svg";

import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Container
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Link to="/" className={styles['headerLeft']}>
          <img src={logoIcon} alt="" />
          <h1 className={styles['headerTitle']}>Новости</h1>
        </Link>

      </Container>
    </header>
  );
};

export default Header;