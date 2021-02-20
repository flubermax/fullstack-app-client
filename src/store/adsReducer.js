const defaultState = {
  "ads": [
    {
      "id": 1,
      "image": 'https://w-max.ru/img/portfolio/plitka-neo.jpg',
      "name": 'Коляска',
      "about": 'Не очень хорошая коляска, не новая, колёса на 22, битая',
      "price": '54489',
      "phone": '+7 (964) 932-47-99',
    },
    {
      "id": 2,
      "image": 'https://w-max.ru/img/portfolio/olly-nails.jpg',
      "name": 'Мопед',
      "about": 'Топовый мопед, новый',
      "price": '6666',
      "phone": '+7 (902) 288-05-77',
    },
    {
      "id": 3,
      "image": 'https://w-max.ru/img/portfolio/asana.jpg',
      "name": 'Коляска 228 322',
      "about": 'Хорошая гоночная коляска, новая, колёса на 18, не битая',
      "price": '75400',
      "phone": '+7 (921) 174-12-56',
    },
    {
      "id": 4,
      "image": 'https://w-max.ru/img/portfolio/cavator.jpg',
      "name": 'Монитор Dell',
      "about": 'Бушный, 24 дюйма, состояние хорошее, на гарантии',
      "price": '3800',
      "phone": '+7 (953) 902-45-12',
    }
  ]
}

const ADD_ADS = 'ADD_ADS'

export const adsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ADS:
      return { ...state, ads: [...state.ads, action.payload] }
    default:
      return state
  }
}

export const addAdsAction = (payload) => ({ type: ADD_ADS, payload })