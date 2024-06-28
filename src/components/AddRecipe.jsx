import React from 'react'
import RecipeNavbar from './RecipeNavbar'

const AddRecipe = () => {
  return (
    <div>
        <RecipeNavbar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">
    Recipe Title
</label>

<input type="text" className="form-control" />
</div>

    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">
            Recipe Image
        </label>

        <input type="file" name="" id="" className="form-control" />
    </div>


    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        
        <label htmlFor="" className="form-label">Description
 </label>
<textarea name="" id="" className="form-control"></textarea>
    </div>

    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        
        <label htmlFor="" className="form-label">Category</label>
        <select name="" id="" className="form-control">
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>
    </div>


    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        
        <label htmlFor="" className="form-label">Prepared By
 </label>
<input type="text" className="form-control" />

    </div>

    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-success">
            Submit
        </button>
    </div>
</div>


        </div>
    </div>
</div>






    </div>
  )
}

export default AddRecipe