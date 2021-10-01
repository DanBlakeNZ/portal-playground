import { View } from '@react-spectrum/view';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <View backgroundColor='indigo-400'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/demo'>Demo Page</Link>
          </li>
          <li>
            <Link to='/demo2'>Demo Page Two</Link>
          </li>
        </ul>
      </nav>
    </View>
  );
};

export default Sidebar;
