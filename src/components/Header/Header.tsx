import "./Header.scss";
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  menuVisible: boolean;
  setMenuVisible: (v: boolean) => void;
}

export const Header: React.FC<Props> = ({ menuVisible, setMenuVisible }) => {
  return (
    <header
      className={classNames("header", {
        "header__background": menuVisible,
      })}>
      <Link
        to="/diesel-center-vite/"
        className={classNames("header__logo", {
          "header__logo--default": !menuVisible,
          "header__logo--white": menuVisible === true,
        })}
      />

      <button
        className={classNames("header__menu", {
          "header__menu--default": !menuVisible,
          "header__menu--white": menuVisible,
        })}
        onClick={() => setMenuVisible(!menuVisible)}
      />
      
    </header>
  )
}
