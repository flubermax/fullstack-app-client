import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './header.scss'
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';
import InputMask from "react-input-mask";
import { login, logout, registration } from '../../actions/user';
import { Loader } from '../Loader';
import { setAuthLoaded } from '../../reducers/userReducer';

const Header = () => {
  const [visibleLoginForm, setVisibleLoginForm] = useState(false)
  const [visibleRegisterForm, setVisibleRegisterForm] = useState(false)
  const currentUserEmail = useSelector((state) => state.userReducer.currentUser.email)
  const { isAuth, authIsLoaded } = useSelector(({ userReducer }) => userReducer)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = React.useState('')
  const [phoneDirty, setPhoneDirty] = React.useState(false)
  const [phoneError, setPhoneError] = React.useState('Введите номер телефона')
  // const [formValid, setFormValid] = React.useState(false)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (isAuth && !authIsLoaded) {
      setVisibleLoginForm(false)
      clearInputs()
    }
  }, [isAuth, authIsLoaded])

  const phoneHandler = (e) => {
    setPhone(e.target.value)
    if (e.target.value.replace(/[^0-9]/g, '').length !== 11) {
      setPhoneError('Некорректный номер телефона')
    } else {
      setPhoneError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {

      case 'phone':
        setPhoneDirty(true)
        break

        default: return true
    }
  }

  const clearInputs = () => {
    setEmail('')
    setPassword('')
    setPhone('')
  }

  return (
    <header className="shadow">
      <div className="header__top">
        <NavLink className="logo" to="/">
          <div className="logo__name"><span>kanda</span>ads</div>
          <div className="logo__text">Быстрые объявления в Кандалакше</div>
        </NavLink>

        {!isAuth && (
        <div className="header__auth">
          <div className="header__auth__item header__auth__item-login" onClick={() => setVisibleLoginForm(true)}>Вход</div>
          <span></span>
          <div className="header__auth__item header__auth__item-register" onClick={() => setVisibleRegisterForm(true)}>Регистрация</div>
        </div>
        )}
        {isAuth && (
        <div className="header__auth">
          <div className="header__auth__currentUser">{currentUserEmail}</div>
          <Button outlined onClick={()=> dispatch(logout())}>
            Выйти
          </Button>
        </div>
        )}
      </div>
      
      {isAuth && (
        <div className="header__bottom">
          <div className="header__services">
            <NavLink to="/own">
              <div className="header__services__item">
                Мои объявления
              </div>             
            </NavLink>   
            <NavLink to="/fav">
              <div className="header__services__item">
                Избранное
              </div>              
            </NavLink>            
            <NavLink to="/new">
              <Button primary>Добавить объявление</Button>
            </NavLink>
          </div>
        </div>
      )}      

      <Modal active={visibleLoginForm} setActive={setVisibleLoginForm}>
        {authIsLoaded ? <Loader /> : 
          <div className="modal__body__inner">
            <div className="modal__body__title">Вход</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email" />        
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль" />
            <Button primary onClick={()=> {dispatch(login(email,password)); dispatch(setAuthLoaded(true))}}>
              Войти
            </Button>
          </div>
        }
      </Modal>

      <Modal active={visibleRegisterForm} setActive={setVisibleRegisterForm}>
        <div className="modal__body__title">Регистрация</div>
        <Input value={email} setValue={setEmail} type="text" placeholder="Введите email*" />
        <InputMask 
          mask="+7 (999) 999-99-99" 
          maskPlaceholder="_" 
          value={phone}
          onChange={e => phoneHandler(e)}
          onBlur={e => blurHandler(e)}
          id="phone"
          type="text"
          placeholder="Введите номер телефона*"
          name="phone"
        />
        {(phoneDirty && phoneError) && <div className="error">{phoneError}</div>} 
        <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль*" />
        <Button primary onClick={()=> {registration(email,phone,password); dispatch(setAuthLoaded(true))}}>
          Зарегистрироваться
        </Button>
      </Modal>
    </header>
  )
}

export default Header
