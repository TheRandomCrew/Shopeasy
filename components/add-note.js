import { useDispatch, useSelector } from 'react-redux'

import { addNote, selectNotes } from '../lib/slices/notesSlice'
import useForm from '../lib/useForm'

const AddNoteForm = () => {
  const dispatch = useDispatch()
  const { error } = useSelector(selectNotes)
  const handleSubmit = useForm({
    title: '',
    content: '',
  })

  return (
    <form onSubmit={handleSubmit((data) => dispatch(addNote(data)))}>
      <h3>Add Item:</h3>
      <label htmlFor="titleText">
        Title: <br/>
        <input type="text" name="title" id="titleText" />
      </label>
      <br />
      {'title' in (error || {}) && <small>{error.title}</small>}
      <br />
      <label htmlFor="contentText">
        Description:<br/>
        <textarea name="content" id="contentText"></textarea>
      </label>
      <br />
      {'content' in (error || {}) && <small>{error.content}</small>}
      <br />
      <button type="submit">Add Item</button>
      <br />
      {typeof error === 'string' && <small>{error}</small>}
      <style jsx>{
        `
          form {
            max-width: 400px;
            min-width: 300px;
            margin: 0 auto 50px auto;
            font-size: 20px;
            padding-top: 80px;
          }
          textarea, input {
            margin-top: 10px;
            border: 1px solid gray;
            width: 98%;
            padding: 5px;
            font-size: 20px            
          }
          textarea:focus, input:focus {
            box-shadow: 0 0 5px #009798;
          }
          button {
            background: #5924B0;
            border: 2px solid #fff;
            text-transform: uppercase;
            width: 220px;
            display: block;
            margin: 10px auto;
            cursor: pointer;
            color: #fff;
            font-size: 25px;
            border-radius: 15px;
            padding: 5px;
          }
          button:focus {
            border: none;
            outline: none;
          }
          h3 {
            font-style: italic;
            font-size: 35px;
            margin-bottom: 20px;
            text-align: center;
          }
          small {
            font-size: 16px;
            margin-bottom: 10px;
            display: inline-block;
            color: red;
          }
        `
      }
      </style>
    </form>
  )
}

export default AddNoteForm
