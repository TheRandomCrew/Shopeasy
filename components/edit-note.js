import { useLayoutEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { editNote } from '../lib/slices/notesSlice'
import useForm from '../lib/useForm'

const EditNoteForm = ({ note = {} }) => {
  const dialogRef = useRef()
  const dispatch = useDispatch()
  const handleSubmit = useForm(note)

  useLayoutEffect(() => {
    const isOpen = Object.keys(note).length > 0
    if (isOpen) {
      dialogRef.current.setAttribute('open', true)
    }
  }, [note])

  return (
    <dialog ref={dialogRef}>
      <form
        onSubmit={handleSubmit(async (data) => {
          await dispatch(editNote(data))
          dialogRef.current.removeAttribute('open')
        })}
      >
        <h3>Edit Item</h3>
        <label htmlFor="titleInput">
          Title:
          <input
            type="text"
            name="title"
            id="titleInput"
            defaultValue={note.title}
          />
        </label>
        <br />
        <label htmlFor="contentInput">
          Description:
          <textarea
            name="content"
            id="contentInput"
            defaultValue={note.content}
          ></textarea>
        </label>
        <br />
        <button type="submit">Edit</button>
        <br />
      </form>
      <style jsx>
        {
          `
          h3 {
            text-align: center;
            text-transform: uppercase;
          }
          form * {
            margin-bottom: 5px;
          }
          button {
            width: 60px;
            margin: 5px auto;
            display: block;
            background: red;
            color: #fff;
            font-size: 17px;
          }
          `
        }
      </style>
    </dialog>
  )
}

export default EditNoteForm
