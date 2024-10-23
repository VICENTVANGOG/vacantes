/* eslint-disable react/no-children-prop */
import React from 'react';
import InfoCard from '../../atoms/div/div';
import Myh1 from '../../atoms/h1/h1';
import MyH3 from '../../atoms/h3/h3';
import Button from '../../atoms/button/button';

const Card: React.FC = () => {
  return (
    <div>
      <InfoCard>
        <Myh1>hola</Myh1>
        <MyH3>hola</MyH3>
        <Myh1>hola</Myh1>
        <MyH3>hola</MyH3>
        <Button children={undefined}/>
        <Button children={undefined}/>
      </InfoCard>
    </div>
  );
};

export default Card;
