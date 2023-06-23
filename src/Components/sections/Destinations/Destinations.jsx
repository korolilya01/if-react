import React, { useState } from 'react';

import { Button } from '../../Button';
import { Container } from '../../Container';
import { DestItem } from './Card/DestItem';
import { Title } from '../../Title';

import { useDispatch, useSelector } from 'react-redux';
import { setDestination } from '../../../store/slices/destination.slice';
import { availableSelector } from '../../../store/selectors/destination.selector';

import { data } from './data';

import { styles } from './Destinations.styles';
import classNames from 'classnames';

export const Destinations = () => {
  const classes = styles();

  const [isOpen, setIsOpen] = useState(false);

  const activeBlock = useSelector(availableSelector);
  const dispatch = useDispatch();

  const handleButtonClick = (block) => {
    dispatch(setDestination(block));
  };

  const handleButtonClickList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <Container>
        <Title content="The best destinations" />
        <Button
          className={classNames(
            classes.button,
            `${activeBlock === 'regions' ? classes.buttonActive : ''}`,
          )}
          content="Regions"
          onClick={() => handleButtonClick('regions')}
        />
        <Button
          className={classNames(
            classes.button,
            `${activeBlock === 'cities' ? classes.buttonActive : ''}`,
          )}
          content="Cities"
          onClick={() => handleButtonClick('cities')}
        />
        <Button
          className={classNames(
            classes.button,
            `${activeBlock === 'places' ? classes.buttonActive : ''}`,
          )}
          content="Places of interest"
          onClick={() => handleButtonClick('places')}
        />

        {data.map(
          (value) =>
            activeBlock === value.value && (
              <div key={value.id} className={value.name}>
                <div
                  className={classNames(
                    classes.list,
                    `${isOpen ? classes.listWrap : ''}`,
                  )}
                >
                  <DestItem
                    data={
                      isOpen
                        ? value.array
                        : value.array.slice(0, value.array.length / 2)
                    }
                  />
                </div>
              </div>
            ),
        )}
        <Button
          onClick={handleButtonClickList}
          className={isOpen ? classes.circleButUp : classes.circleButDown}
        />
      </Container>
    </section>
  );
};
