import image from '../assets/images/coffee_code.png';

import { View } from '@react-spectrum/view';
import { styled } from '@compiled/react';

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 8px 10px;
  background-color: #6554c0;
  color: #fff;
  font-weight: 400;
  font-family: arial;
  font-size: 14px;

  :hover {
    background-color: #8777d9;
  }
`;

const HomePage = () => {
  return (
    <View padding='size-400'>
      <h1>Home Page</h1>
      <img width='300px' src={image} alt='Coffee Coding' />
      <Button>Click ME</Button>
    </View>
  );
};

export default HomePage;
