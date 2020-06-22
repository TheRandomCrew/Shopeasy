import Dynamic from 'next/dynamic'
import Head from 'next/head'
import style from './css/notes.module.css'

import AddNoteForm from '../components/add-note'
const EditNoteForm = Dynamic(import('../components/edit-note'), { ssr: false })

const Products = ({
  onClickButton = () => {},
  items = [],
  selectedItem = {},
}) => {
  const renderNote = (note) => (
    <li key={note.id} className={style.list}>
      <strong>{note.title}</strong>
      <br />
      <span>{note.content}</span>
      <br />
      <button
        aria-label={`Delete note with title: ${note.title}`}
        onClick={() => onClickButton(note.id)}
      >
        🗑️
      </button>
      <button
        onClick={() => onClickButton(note, 'edit')}
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
      <ul>{items.map(renderNote)}</ul>
      <EditNoteForm note={selectedItem} />
    </div>
  )
}

export default Products
