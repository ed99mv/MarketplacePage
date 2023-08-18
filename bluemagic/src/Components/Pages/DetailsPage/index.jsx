import React, { useEffect, useState } from "react";

import CardDetails from "../../Card/CardDetails";
import Header from "../../Header";
import Footer from "../../Footer";

const DetailsPage = () => {
  return (
    <div>
      <Header />
      <br />
      <CardDetails />
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DetailsPage;
