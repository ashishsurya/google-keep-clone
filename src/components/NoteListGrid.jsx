import React, { useState } from 'react';
import './NoteListGrid.css';

const NoteListGrid = () => {
  const [pinnedGridList, setPinnedGridList] = useState([]);

  const [normalGridList, setNormalGridList] = useState([]);

  return <div className='notelistgrid'>
    <div className="pinnednotes">

    </div>
    <div className="normalnotes">
      
    </div>
  </div>;
};

export default NoteListGrid;
