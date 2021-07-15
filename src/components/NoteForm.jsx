import React from 'react';
import './NoteForm.css';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { Button, IconButton } from '@material-ui/core';
const NoteForm = ({ inputNoteRef }) => {
  return (
    <div className='noteform'>
      <form className='nf__form'>
        <div className='nf__titleInp'>
          <input
            ref={inputNoteRef}
            className='titleInput'
            type='text'
            placeholder='Title'
          />
        </div>
        <div className='nf__noteInp'>
          <input
            ref={inputNoteRef}
            className='noteInput'
            type='text'
            placeholder='Take a Note...'
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
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
