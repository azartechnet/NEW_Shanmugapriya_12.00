import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [editStudent, setEditStudent] = useState(null);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Student CRUD Application</h2>

            <StudentForm
                editStudent={editStudent}
                setEditStudent={setEditStudent}
            />

            <StudentTable
                setEditStudent={setEditStudent}
            />
        </div>
    );
}

export default App;