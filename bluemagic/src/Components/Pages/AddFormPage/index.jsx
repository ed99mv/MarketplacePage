import React, { useState } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import data from "../../../info";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

const AddFormPage = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data1) => {

    let colons = "₡";
    let precio = colons + data1.price;    ///agregar el signo de colones al input "price"
    data1.price = "";
    data1.price = precio;

    let val = [];
    val.push(data1.services); ///agregar vectores al dato services
    data1.services = "";
    data1.services = val;

    const dataRun = data.length + 1;
    data.push({ ...data1, id: dataRun });
  

    val.push();

    console.log(data);
  };



            // <div className="group">
            //   <label>Id:</label>
            //   <input
            //     placeholder="Add next ID"
            //     className="input-container ic1"
            //     type="text"
            //     {...register("id", { required: true })}
            //   ></input>
            //   {/* {errors.brand?.type === 'required' && <p></p>} */}
            // </div>


  return (
    <>
      <Header />
      <div className="container">
        <div className="cardDetails">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h1 className="titleAdd">Add Tour</h1>

            <div className="group">
              <label>Tour:</label>
              <input
                placeholder="Add Tour"
                className="input-container ic1"
                type="text"
                {...register("title", { required: true })}
              />
              {errors.title?.type === "required" && <p>Obligatory field</p>}
            </div>

            <div className="group">
              <label>Description:</label>
              <input
              autoComplete="off"
                placeholder="Add Decription"
                className="input-container ic1"
                type="text"
                {...register("description", { required: true })}
              />
              {errors.description?.type === "required" && (
                <p>Obligatory Description</p>
              )}
            </div>

            <div className="group">
              <label>Includes:</label>
              <input
              value={"Incluye:"}
              autoComplete="off"
                placeholder="Includes"
                className="input-container ic1"
                type="text"
                {...register("include", { required: true })}
              />
              {errors.price?.type === 'required' && <p></p>}
            </div>

            <div className="group">
              <label>Services:</label>
              <input
                placeholder="Add Services"
                className="input-container ic1"
                type="text"
                {...register("services", { required: true })}
              />
              {/* {errors.brand?.type === 'required' && <p></p>} */}
            </div>
            <br />

            <div className="group">
              <label>Img:</label>
              <input
                placeholder="Add URL image"
                className="input-container ic1"
                type="text"
                {...register("img", { required: true })}
              />
              {/* {errors.brand?.type === 'required' && <p></p>} */}
            </div>

            <div className="group">
              <label>Price:</label>
              <input
                placeholder="Add Price"
                className="input-container ic1"
                type="text"
                {...register("price", { required: true })}
              />
              {/* {errors.brand?.type === 'required' && <p></p>} */}
            </div>

            <button type="submit">Submit</button>
            <Link to="/"></Link>
          </form>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default AddFormPage;
