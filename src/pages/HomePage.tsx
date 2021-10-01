import image from '../assets/images/coffee_code.png';
import { View } from '@react-spectrum/view';

const HomePage = () => {
  return (
    <View padding='size-400'>
      <h1>Home Page</h1>
      <img width='300px' src={image} alt='Coffee Coding' />
    </View>
  );
};

export default HomePage;
