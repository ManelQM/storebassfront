import React from "react";
import "./Header.css"
import { NavBar } from "../../components/NavBar/NavBar";
import { Col, Container, Row, Table} from "react-bootstrap";

 const Header = () => {

    return (
        <div className="headerAesthetics">
     <NavBar/>
     
     </div>
    );
 };

 export default Header;