import '../stylesheets/FavSearchComponent.css'
import { useState } from 'react'
import triangleRight from '../images/triangle-black-left.svg'
import triangleLeft from '../images/triangle-black-right.svg'
import searchIcon from '../images/search.png'

function FavSearchComponent() {

  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangeInput = (event) => {
    setSearch(event.target.value)
  }

  const handleDisabled = () => {
    if (search.length == 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <form className='form-search' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input-search'
          spellCheck='false'
          autoComplete='none'
          placeholder='Search by league name'
          value={search}
          onChange={handleChangeInput}
        />
        <button type='submit' disabled={handleDisabled()} className='form-search-button-container'>
          <img src={triangleRight} className='triangle-for-button'/>
          <div className='button-box black search'>
            <p className='button-text white'><img src={searchIcon} className='form-search-icon' /></p>
          </div>
          <img src={triangleLeft} className='triangle-for-button'/>
        </button>
      </form>
    </>
  )
}

export default FavSearchComponent;