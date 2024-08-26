import React, { useEffect, useState } from 'react';
import Display from './Display';

const Seeall = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/v1/user/see");

                if (!response.ok) {
                    throw new Error('Failed to fetch students');
                }

                const data = await response.json();
                console.log("Fetched data:", data); // Log the API response

                setStudents(data.students); // Store students array in state
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log("Fetch error:", error.message);
            }
        };

        fetchAll(); // Invoke the function to fetch data
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!students.length) {
        return <p>No students found.</p>;
    }

    return (
        <div>
            <h1>The students data is found</h1>
            <ul>
                {students.map((stud) => (
                    <Display key={stud._id} name={stud.name} email={stud.email} skills={stud.skills} />
                ))}
            </ul>
        </div>
    );
};

export default Seeall;
