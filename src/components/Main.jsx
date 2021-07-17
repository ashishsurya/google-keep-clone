import React from 'react';
import './Main.css';
import NoteForm from './NoteForm';
import NoteListGrid from './NoteListGrid';

const Main = () => {
  return (
    <div className='main'>
      <NoteForm />
      <NoteListGrid />
    </div>
  );
};

export default Main;
