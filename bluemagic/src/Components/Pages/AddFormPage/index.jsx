import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import data from "../../../info";
import { Link } from "react-router-dom";
import Header from "../../Header";

const AddFormPage = () => {
  const dataRun= data.length+1;
  console.log(dataRun);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data1) => {
    let idS = data.length;
    data.push({...data1, id: idS})
    const idF = {
      id: idS,
    };

   


    console.log(data)
  };

  return (
    <div className="container">
      <Header/>
      <div>
        <h1 className="title">Add Form</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
            <label>id:</label>
            <input className="input-container ic1" type="text" {...register("id", { required: true })}></input>
            {/* {errors.brand?.type === 'required' && <p></p>} */}
          </div>
          <div>
            <label>Title:</label>
            <input className="input-container ic1" type="text" {...register("title", { required: true })} />
            {errors.title?.type === "required" && <p>Obligatory field</p>}
          </div>

          <div>
            <label>Description:</label>
            <input  className="input-container ic1"
              type="text"
              {...register("description", { required: true })}
            />
            {errors.description?.type === "required" && (
              <p>Obligatory Description</p>
            )}
          </div>

          <div>
            <label>Incluye:</label>
            <input  className="input-container ic1" type="text" {...register("include", { required: true })} />
            {/* {errors.price?.type === 'required' && <p></p>} */}
          </div>

          <div>
            <label>Services:</label>
            <input  className="input-container ic1" type="text" {...register("services", { required: true })} />
            {/* {errors.brand?.type === 'required' && <p></p>} */}
          </div>
          <br />
          
          <div>
            <label>Img:</label>
            <input  className="input-container ic1" type="text" {...register("img", { required: true })} />
            {/* {errors.brand?.type === 'required' && <p></p>} */}
          </div>

          <div>
            <label>Price:</label>
            <input  className="input-container ic1" type="text" {...register("price", { required: true })} />
            {/* {errors.brand?.type === 'required' && <p></p>} */}
          </div>


          <input type="submit" value="Add" />
          <Link to="/">
            <button>Return</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddFormPage;
