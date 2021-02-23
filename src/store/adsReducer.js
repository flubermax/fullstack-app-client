const defaultState = {
  "ads": [
    {
      "id": 1,
      "image": 'https://w-max.ru/img/audi.jpg',
      "name": 'Audi A4',
      "about": 'В хорошем состоянии, 2 владельца, крашены капот и бампер. Дсг после ремонта. Помощь в продаже не требуется',
      "price": '750000',
      "phone": '+7 (964) 932-47-99',
    },
    {
      "id": 2,
      "image": 'https://w-max.ru/img/powerbank.jpg',
      "name": 'Powerbank',
      "about": 'Почти новый. Чек, гарантия.',
      "price": '',
      "phone": '+7 (902) 288-05-77',
    },
    {
      "id": 3,
      "image": 'https://w-max.ru/img/dell.jpg',
      "name": 'Монитор Dell',
      "about": 'Без дефектов. 24 дюйма, состояние хорошее',
      "price": '6500',
      "phone": '+7 (921) 174-12-56',
    },
    {
      "id": 4,
      "image": 'https://w-max.ru/img/subaru.jpg',
      "name": 'Subaru Impreza WRX',
      "about": 'Колёса на 18, чип, выхлоп. Новое сцепление. Турбина требует ремонта',
      "price": '877300',
      "phone": '+7 (953) 902-45-12',
    }
  ]
}

const ADD_AD = 'ADD_AD'
const REMOVE_AD = 'REMOVE_AD'

export const adsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_AD:
      return { ...state, ads: [...state.ads, action.payload] }

    case REMOVE_AD:
      return { ...state, ads: state.ads.filter(ad => ad.id !== action.payload) }

    default:
      return state
  }
}

export const addAdsAction = (payload) => ({ type: ADD_AD, payload })
export const removeAdsAction = (payload) => ({ type: REMOVE_AD, payload })