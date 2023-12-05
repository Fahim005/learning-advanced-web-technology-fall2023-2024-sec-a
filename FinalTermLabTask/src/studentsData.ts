export interface Student {
    id: number;
    name: string;
    age: number;
    grade: string;
  }
  
  const students: Student[] = [
    { id: 1, name: 'John Doe', age: 15, grade: 'A' },
    { id: 2, name: 'Jane Doe', age: 16, grade: 'B' },
    // Add more sample data as needed
  ];
  
  export default students;