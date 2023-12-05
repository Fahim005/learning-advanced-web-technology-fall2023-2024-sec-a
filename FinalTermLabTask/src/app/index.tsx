import Link from 'next/link';
import { Student } from '../src/studentsData';

const Home: React.FC = () => {
  const students: Student[] = []; // Fetch data from studentsData.ts or an API

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link href={`/students/${student.id}`}>
              <a>{student.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/students/new">
        <a>Add New Student</a>
      </Link>
    </div>
  );
};

export default Home;