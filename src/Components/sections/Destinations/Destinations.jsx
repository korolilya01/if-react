import React, { useState } from 'react';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { Button } from '../../Button';

import { useDispatch, useSelector } from 'react-redux';
import { setDestination } from '../../../store/slices/destination.slice';
import { availableSelector } from '../../../store/selectors/destination.selector';

import { data } from './data';

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
          buttonClassName={`dest__button ${
            activeBlock === 'regions' ? 'dest__button-active' : ''
          }`}
          content="Regions"
          onClick={() => handleButtonClick('regions')}
        />
        <Button
          buttonClassName={`dest__button ${
            activeBlock === 'cities' ? 'dest__button-active' : ''
          }`}
          content="Cities"
          onClick={() => handleButtonClick('cities')}
        />
        <Button
          buttonClassName={`dest__button  ${
            activeBlock === 'places' ? 'dest__button-active' : ''
          }`}
          content="Places of interest"
          onClick={() => handleButtonClick('places')}
        />

        {data.map(
          (value) =>
            activeBlock === value.value && (
              <div key={value.id} className={value.name}>
                <div
                  className={`dest__list  ${isOpen ? 'dest__list-wrap' : ''}`}
                >
                  {isOpen
                    ? value.array.map((item) => (
                        <div key={item.id} className="dest__item">
                          <div className="item-link">
                            <a href="#">
                              <img
                                className="dest__img"
                                src={item.src}
                                alt={item.alt}
                              />
                              <button type="submit" className="but__dest">
                                Book now
                              </button>
                            </a>
                          </div>
                          <a href="#">
                            {item?.dest} {item?.city} {item.country}
                          </a>
                        </div>
                      ))
                    : value.array
                        .slice(0, value.array.length / 2)
                        .map((item) => (
                          <div key={item.id} className="dest__item">
                            <div className="item-link">
                              <a href="#">
                                <img
                                  className="dest__img"
                                  src={item.src}
                                  alt={item.alt}
                                />
                                <button type="submit" className="but__dest">
                                  Book now
                                </button>
                              </a>
                            </div>
                            <a className="item__text" href="#">
                              {item?.dest} {item?.city} {item.country}
                            </a>
                          </div>
                        ))}
                </div>
              </div>
            ),
        )}
        {isOpen ? (
          <Button
            onClick={handleButtonClickList}
            buttonClassName="circleButUp"
          />
        ) : (
          <Button
            onClick={handleButtonClickList}
            buttonClassName="circleButDown"
          />
        )}
      </Container>
    </section>
  );
};
