import React, { useState } from 'react';

import { Button } from '../../Button';
import { Container } from '../../Container';
import { DestItem } from './DestItem';
import { Title } from '../../Title';

import { useDispatch, useSelector } from 'react-redux';
import { setDestination } from '../../../store/slices/destination.slice';
import { availableSelector } from '../../../store/selectors/destination.selector';

import { data } from './data';

import classNames from 'classnames';
import './Destinations.scss';

export const Destinations = () => {
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
    <section className="destinations">
      <Container>
        <Title className="dest__title" content="The best destinations" />
        <Button
          className={classNames(
            'dest__button',
            `${activeBlock === 'regions' ? 'dest__button-active' : ''}`,
          )}
          content="Regions"
          onClick={() => handleButtonClick('regions')}
        />
        <Button
          className={classNames(
            'dest__button',
            `${activeBlock === 'cities' ? 'dest__button-active' : ''}`,
          )}
          content="Cities"
          onClick={() => handleButtonClick('cities')}
        />
        <Button
          className={classNames(
            'dest__button',
            `${activeBlock === 'places' ? 'dest__button-active' : ''}`,
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
                    'dest__list',
                    `${isOpen ? 'dest__list-wrap' : ''}`,
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
          className={isOpen ? 'circleButUp' : 'circleButDown'}
        />
      </Container>
    </section>
  );
};
