import Dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
    <li key={note.id} className="list">
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
    <div>
      <Head>
        <title>Shop List</title>
      </Head>
      <AddNoteForm />
      <hr />
      <h3>Your Shop list:</h3>
      <ul>{notes.map(renderNote)}</ul>
      <EditNoteForm note={selectedNote} />
      <style jsx>
        {`
          div {
            background: #CBEBEE;
            height: 100vh;
        }
          hr {
            color: silver;
          }
          h3 {
            font-size: 30px;
            text-align: center;
          }
          .list {
            display: flex;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  )
}

export default Notes
