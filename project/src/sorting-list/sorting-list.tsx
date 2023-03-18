import { useState } from 'react';
import { Sorting } from '../constant';
import { SortName } from '../types/common';


function SortingList(): JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleToggleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleButtonClick}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpened && (
        <ul className="places__options places__options--custom places__options--opened">
          {(Object.entries(Sorting) as [SortName, Sorting][]).map(([name, title], index) => (
            <li key={name} className={'places__option'} tabIndex={index}>{title}</li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortingList;
