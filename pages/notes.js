import Dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './css/notes.module.css'

import AddNoteForm from '../components/add-note'
import { deleteNote, loadNotes, selectNotes } from '../lib/slices/notesSlice'

const EditNoteForm = Dynamic(import('../components/edit-note'), { ssr: false })
const Notes = () => {
  const [selectedNote, setSelectedNote] = useState()
  const dispatch = useDispatch()
  const { notes } = useSelector(selectNotes)

  useEffect(() => {
    async function dispatchLoadNotes() {
      await dispatch(loadNotes())
    }
    dispatchLoadNotes()
  }, [dispatch])

  const renderNote = (note) => (
    <li key={note.id} className={style.list}>
      <strong>{note.title}</strong>
      <br />
      <span>{note.content}</span>
      <br />
      <button
        aria-label={`Delete note with title: ${note.title}`}
        onClick={() => dispatch(deleteNote(note.id))}
      >
        🗑️
      </button>
      <button
        onClick={() => setSelectedNote(note)}
        aria-label={`Edit note with title: ${note.title}`}
      >
        ✏️
      </button>
    </li>
  )

  return (
    <div className={style.wrapper}>
      <Head>
        <title>Shop List</title>
      </Head>
      <AddNoteForm />
      <h3 className={style.shopHead}>Your Shop list:</h3>
      <ul>{notes.map(renderNote)}</ul>
      <EditNoteForm note={selectedNote} />
    </div>
  )
}

export default Notes
