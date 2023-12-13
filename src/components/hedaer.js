import {Link} from "react-router-dom";

export function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">NirKaufman | Blog</a>
          <ul className='nav'>
            <li className='nav-item'>
              <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/posts">Posts</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}
