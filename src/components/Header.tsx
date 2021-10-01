import { Heading } from '@react-spectrum/text';
import { View } from '@react-spectrum/view';

const Header = () => {
  return (
    <View
      paddingStart='size-250'
      gridArea='header'
      backgroundColor='chartreuse-400'
    >
      <Heading level={1}>Dubber</Heading>
    </View>
  );
};

export default Header;
