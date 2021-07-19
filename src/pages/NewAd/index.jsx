import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addAdsAction } from '../../reducers/adsReducer';

import { Button, Input } from '../../components'

import './NewAd.scss'

const NewAd = () => {
  const dispatch = useDispatch()
  const [image, setImage] = React.useState('')
  const [about, setAbout] = React.useState('')
  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [nameDirty, setNameDirty] = React.useState(false)  
  const [nameError, setNameError] = React.useState('Введите название объявления')
  const [formValid, setFormValid] = React.useState(false)
  const [newAddSuccess, setNewAddSuccess] = React.useState(false)

  React.useEffect(() => {
    if (nameError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError])  

  const imageHandler = (e) => {
    setImage(e.target.value)
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    if (e.target.value.length < 5) {
      setNameError('Минимум 5 символов')
      if(!e.target.value) {
        setNameError('Введите название объявления')
      }
    } else {
      setNameError('')
    }
  }
  
  const aboutHandler = (e) => {
    setAbout(e.target.value)
  }
  
  const priceHandler = (e) => {
    setPrice(e.target.value)
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true)
        break

        default: return true
    }
  }

  const addItem = () => {
    const ad = {
      "id":  Date.now(),
      image,
      name,
      about,
      price
    }
    dispatch(addAdsAction(ad))

    setImage('')
    setName('')
    setAbout('')
    setPrice('')

    setNewAddSuccess(true)
    setFormValid(false)
    setTimeout(() => setNewAddSuccess(false), 5000);
  }

  return (
    <div className="newAd">
      <div className="newAd__title">Новое объявление</div>
      <form className="newAd__form">
      <Input
        value={image}
        onChange={e => imageHandler(e)}
        onBlur={e => blurHandler(e)}
        id="image"
        type="text"
        placeholder="Ссылка на изображение"
        name="image"
      />
      {(nameDirty && nameError) && <div className="error">{nameError}</div>}
      <Input
        value={name}
        onChange={e => nameHandler(e)}
        onBlur={e => blurHandler(e)}
        id="name"
        type="text"
        placeholder="Название (обязательно)"
        name="name"
      />
      <Input
        value={about}
        onChange={e => aboutHandler(e)}
        onBlur={e => blurHandler(e)}
        id="about"
        type="text"
        placeholder="Описание"
        name="about"
      />
      <Input
        value={price}
        onChange={e => priceHandler(e)}
        onBlur={e => blurHandler(e)}
        id="price"
        type="text"
        placeholder="Укажите цену"
        name="price"
      />     
      </form>

      <div className="newAd__buttonsRow">
        <NavLink to="/">
          <Button outlined>На главную</Button>
        </NavLink>
        <Button primary onClick={addItem} disabled={!formValid} type="submit">
          Добавить
        </Button>
        {
          newAddSuccess && (<div className='newAd__complete'>Ваше объявление добавлено!</div>)          
        }
      </div>
    </div>
  )
}

export default NewAd
