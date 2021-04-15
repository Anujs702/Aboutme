import React, { useState } from 'react';

const Contact =() =>{

  const[data,setdata] = useState ({

    fullname: "",
    number: "",
    email: "",
    remarks: "",

  });


  const InputEvent =(event) =>
  {
      const{name , value} = event.target;

      setdata((preVal) =>{
        return {
          ...preVal,[name]: value,




        };
      });



      };




    const formSubmit =(e) =>{

      e.preventDefault();
      alert(`${data.fullname}`);





    };





  return (
      <>
        <div className="container-fluid">
      <div className="row">
      <div className="col-10 mx-auto">

        <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="fullname"  name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Name"/>
    
      </div>
      <div class="form-group">
    <label for="exampleInputEmail1">Number</label>
    <input type="number" class="form-control" id="number" name="number" value={data.number} onChange={InputEvent}  placeholder="Enter Number"/>
      </div>
      <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={data.email} onChange={InputEvent}  placeholder="Enter email"/>
      </div>
      <div class="form-group">
    <label for="exampleInputEmail1">Remarks</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name="remarks" value={data.remarks} onChange={InputEvent}  placeholder="Enter Suggetion"/>
      </div>
  
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 </div>
 </div>
 </div>

      </>


  );


};

export default Contact;
