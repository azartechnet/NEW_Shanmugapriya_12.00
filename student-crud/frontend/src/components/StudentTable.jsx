import { useEffect, useState } from "react";
import api from "../services/api";

function StudentTable({ setEditStudent }) {

    const [students, setStudents] = useState([]);

    const loadStudents = async () => {
        const res = await api.get("/students");
        setStudents(res.data);
    };

    useEffect(() => {
        loadStudents();
    }, []);

    const handleDelete = async (id) => {
        await api.delete(`/students/${id}`);
        loadStudents();
    };

    return (
        <div className="container mt-4">

            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student, index) => (
                        <tr key={student._id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.course}</td>

                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setEditStudent(student)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(student._id)}
                                >
                                    Delete
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default StudentTable;