import React, { useState, useEffect } from 'react';
import './Addusers.css';

const Addusers = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Fetch data from data.json on component mount
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      setStudents(data.students);
      setTeachers(data.teachers);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleAddTeacher = (newTeacher) => {
    setTeachers([...teachers, newTeacher]);
  };

  const handleDeleteTeacher = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  return (
    <div className="app">
      <h1>Admin Dashboard</h1>
      <div className="management-section">
        <h2>Student </h2>
        <StudentManagement
          students={students}
          onAddStudent={handleAddStudent}
          onDeleteStudent={handleDeleteStudent}
        />
      </div>
      <div className="management-section">
        <h2>Teacher</h2>
        <TeacherManagement
          teachers={teachers}
          onAddTeacher={handleAddTeacher}
          onDeleteTeacher={handleDeleteTeacher}
        />
      </div>
    </div>
  );
};

const StudentManagement = ({ students, onAddStudent, onDeleteStudent }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddStudent = () => {
    if (inputValue.trim() !== '') {
      const newStudent = {
        id: Date.now(),
        name: inputValue
      };

      onAddStudent(newStudent);
      setInputValue('');
    }
  };

  const handleDeleteStudent = (id) => {
    onDeleteStudent(id);
  };

  return (
    <div>
      <div className="add-item">
        <input
          type="text"
          placeholder="Enter student name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      <ul className="item-list">
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeacherManagement = ({ teachers, onAddTeacher, onDeleteTeacher }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTeacher = () => {
    if (inputValue.trim() !== '') {
      const newTeacher = {
        id: Date.now(),
        name: inputValue
      };

      onAddTeacher(newTeacher);
      setInputValue('');
    }
  };

  const handleDeleteTeacher = (id) => {
    onDeleteTeacher(id);
  };

  return (
    <div>
      <div className="add-item">
        <input
          type="text"
          placeholder="Enter teacher name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTeacher}>Add Teacher</button>
      </div>
      <ul className="item-list">
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.name}
            <button onClick={() => handleDeleteTeacher(teacher.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Addusers;
