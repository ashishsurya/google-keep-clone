import { Button, IconButton, TextField } from '@material-ui/core';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import React, { useState } from 'react';
import './NoteForm.css';
import { useStateValue } from '../StateProvider';
import uuid from 'react-uuid';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const [pinned, setPinned] = useState(false);

  const [state, dispatch] = useStateValue();
  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" && note === "") {
      return;
    }
    if (pinned) {
      dispatch({
        type: 'ADD_PINNED_NOTE',
        payload: { id: uuid(), title: title, note: note },
      });
    } else {
      dispatch({
        type: 'ADD_NOTE',
        payload: { id: uuid(), title: title, note: note },
      });
    }

    setNote('');
    setPinned(false);
    setTitle('');
  };
  console.log(state);
  return (
    <div className='noteform'>
      <form className='nf__form' onSubmit={onSubmit}>
        <div className='note__pinIcon'>
          <IconButton>
            {pinned ? (
              <BookmarkIcon onClick={() => setPinned(!pinned)} />
            ) : (
              <BookmarkBorderIcon onClick={() => setPinned(!pinned)} />
            )}
          </IconButton>
        </div>
        <div className='nf__titleInp'>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='titleInput'
            type='text'
            placeholder='Title'
          />
        </div>
        <div className='nf__noteInp'>
          <TextField
            placeholder='Placeholder'
            multiline
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className='form__footer'>
          <div className='formfooter__icons'>
            <IconButton>
              <AddAlertOutlinedIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <PersonAddOutlinedIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <ColorLensOutlinedIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <PhotoOutlinedIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <ArchiveOutlinedIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon fontSize='small' />
            </IconButton>
          </div>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
