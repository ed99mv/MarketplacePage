import React from "react";
import data from "../../../info";
import { Link } from "react-router-dom";
import "./index.css";
import Card from "../../Card";
import Pagination from "./Pagination";
import { useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";



data.push( )






const pagesize=3

const HomePage = () => {
const [pagina, setPagina] = useState(0);
//0*3=0, 0*3+pagesize=3
//1*3=3, 1*3+pagesize=6

  return (

    <div>
        <Header/>

      <div className="products">
        <Link to="/DetailsPage/:travelId">
          <ul className="products ul">
            {data.slice(pagina*pagesize, pagina*pagesize+pagesize).map((data) => {
              return <Card {...data} key={data.id} />;
            })}
          </ul>
        </Link>
      </div>
      <Pagination pagina={pagina} setPagina={setPagina}/>
      <Footer/>
    </div>
  );
};
export default HomePage;
