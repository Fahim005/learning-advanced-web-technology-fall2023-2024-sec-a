import { useRouter } from 'next/router';
import { Student } from '../../src/studentsData';

const StudentDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const student: Student | undefined = undefined; // Fetch data from studentsData.ts or an API

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{student.name}</h1>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
};

export default StudentDetail;