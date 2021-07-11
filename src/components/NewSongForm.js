import React, {useState} from 'react'

const NewSongForm = ({addSong}) => {
  const [title, setTitle ] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addSong(title)
    setTitle('')
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">Song name:</label>
      <input type="text" name="name" id="name" value={title} required onChange={(e) => setTitle(e.target.value)}/>
      <input type="submit" value="add song" />
    </form>
  )
}

export default NewSongForm
