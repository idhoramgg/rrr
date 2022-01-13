import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
const Nv = styled.div`
  width: 100%;
  height: 50px;
  background-color: #0077d9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function Navbar() {
  const styles = {
    list: {
      justtifyCcontent: "center",
      listStyleType: 'none',
      fontSize: '20px',
      margin: '0px 10px'
    },
    link: {
        color: "#fafdff",
        textDecoration: 'none'
    }
  };
  return (
    <Nv>
      <li style={styles.list}> 
         <Link style={styles.link} to="/">Home</Link>
      </li>
      <li style={styles.list}> 
         <Link style={styles.link} to="/about">About</Link>
      </li>
      <li style={styles.list}> 
         <Link style={styles.link} to="/portofolio">Portofolio</Link>
      </li>
      <li style={styles.list}> 
         <Link style={styles.link} to="/contact">Contact</Link>
      </li>
    </Nv>
  );
}
