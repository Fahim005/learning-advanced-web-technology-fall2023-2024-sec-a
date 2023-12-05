"use client"
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Student } from '../../src/studentsData';

const NewStudent: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [grade, setGrade] = useState('');

  const handleSave = () => {
    // Save data to studentsData.ts or an API
    const newStudent: Student = {
      id: Math.floor(Math.random() * 1000), // Temporary ID generation
      name,
      age: age || 0,
      grade,
    };

    // Redirect to the student's detail page
    router.push(`/students/${newStudent.id}`);
  };

  return (
    <div>
      <h1>Add New Student</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age || ''} onChange={(e) => setAge(parseInt(e.target.value, 10) || undefined)} />
        </label>
        <br />
        <label>
          Grade:
          <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default NewStudent;