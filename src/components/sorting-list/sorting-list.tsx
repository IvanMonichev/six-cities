import { useState } from 'react';
import { Sorting } from '../../constant';
import { SortName } from '../../types/common';

type SortingListProps = {
  onChange: (name: SortName) => void;
  activeSorting: SortName;
}

function SortingList({ onChange, activeSorting}: SortingListProps): JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleToggleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleSortItemClick = (name: SortName) => {
    setIsOpened(false);
    onChange(name);
  };

  return (
    <form className="places__sorting" action="src/components/sorting-list/sorting-list#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleButtonClick}>
        {Sorting[activeSorting]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpened && (
        <ul className="places__options places__options--custom places__options--opened">
          {(Object.entries(Sorting) as [SortName, Sorting][]).map(([name, title], index) => (
            <li
              key={name}
              className={`places__option ${name === activeSorting ? 'places__option--active' : ''}`}
              tabIndex={index}
              onClick={() => handleSortItemClick(name)}
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortingList;
