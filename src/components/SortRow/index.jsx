import React from 'react'
import PropTypes from 'prop-types'

import './SortRow.scss'

const SortRow = ({items, activeSortType, onClickSortType}) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef();
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;
  
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
    setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировать по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div> 
      <ul className={visiblePopup ? "sort__dropdown shadow active" : "sort__dropdown shadow"}>
        {items.map((item, index) => (
          <li 
          className={activeSortType === item.type ? 'sort__dropdown__item active' : 'sort__dropdown__item'}
          key={`${item.type}_${index}`}
          onClick={() => onSelectItem(item)}
          >
            {item.name}
          </li>)
        )}
      </ul>     
    </div>
  )
}

SortRow.propTypes = {
  items: PropTypes.array,
  activeSortType: PropTypes.string,
  onClickSortType: PropTypes.func,
}

export default SortRow
