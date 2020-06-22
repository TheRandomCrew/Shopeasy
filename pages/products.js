
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteNote, loadNotes, selectNotes } from '../lib/slices/notesSlice'

import { Products as ProductsView } from '../view'

const Products = () => {
    const [selectedNote, setSelectedNote] = useState()
    const dispatch = useDispatch()
    const { notes } = useSelector(selectNotes)

    useEffect(() => {
        async function dispatchLoadNotes() {
          await dispatch(loadNotes())
        }
        dispatchLoadNotes()
      }, [dispatch])

      const onClickButton = (item, type='delete') => {
          if (type === 'delete') return dispatch(deleteNote(item.id));
          return setSelectedNote(item)
      }
    return (
        <ProductsView 
            onClickButton={onClickButton}
            items={notes}
            selectedItem={selectedNote}
        />
    )
}

export default Products
