import './style.scss';
import { useState } from 'react';
import SearchBar from '../SearchBar';
import Filter from '../Filter';
import Student from './Student';
import studentData from '../../db/students.json';

const PointsStudents = () => (
  <div className="points-management-recipient">
    <Filter />
    <SearchBar />
    {studentData.map((student) => (
      <Student
        key={student.id}
        {...student}
      />
    ))}
    {/* TODO: composant Student et map */}

  </div>
);

export default PointsStudents;
