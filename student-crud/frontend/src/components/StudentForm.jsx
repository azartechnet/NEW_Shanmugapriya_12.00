import { useState, useEffect } from "react";
import api from "../services/api";

function StudentForm({ editStudent, setEditStudent }) {

    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: ""
    });

    useEffect(() => {
        if (editStudent) {
            setStudent(editStudent);
        }
    }, [editStudent]);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (student._id) {

                await api.put(`/students/${student._id}`, student);

                alert("Student Updated Successfully");

            } else {

                await api.post("/students", student);

                alert("Student Added Successfully");
            }

            setStudent({
                name: "",
                email: "",
                course: ""
            });

            setEditStudent(null);

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">

            <h3>
                {student._id ? "Update Student" : "Add Student"}
            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={student.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={student.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        name="course"
                        className="form-control"
                        placeholder="Course"
                        value={student.course}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn btn-primary">
                    {student._id ? "Update" : "Save"}
                </button>

            </form>

        </div>
    );
}

export default StudentForm;