import { useState } from "react";
import api from "../services/api";
function StudentForm()
{

    const [student,setStudent]=useState({
        name:"",
        email:"",
        course:""
    });

    const handleChange=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value})
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try
        {
            await api.post("/students",student);
            alert("Student Register Sucess!!!");
            setStudent({
                name:"",
                email:"",
                course:""
            })
        }catch(error)
        {
            alert("Error");
            console.log(error);
        }
    }

    return(
        
        <div className="container mt-4">
                <h1>This is StudentForm</h1>
               <form onSubmit={handleSubmit}>
                   <div className="mb-3">
                      <label>Name</label>
                      <input type="text" className="form-control" 
                      name="name" value={student.name} onChange={handleChange} required/>
                   </div>
                   <div className="mb-3">
                      <label>Email</label>
                      <input type="email" className="form-control" 
                      name="email" value={student.email} onChange={handleChange} required/>
                   </div>
                   <div className="mb-3">
                      <label>Course</label>
                      <input type="text" className="form-control" 
                      name="course" value={student.course} onChange={handleChange} required/>
                   </div>
                   <button className="btn btn-primary">Register</button>
                </form> 

        </div>
    )
}
export default StudentForm;