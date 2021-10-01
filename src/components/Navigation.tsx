import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
