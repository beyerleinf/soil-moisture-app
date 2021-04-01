import { Page, Toolbar, Button } from "react-onsenui";
import { Header } from "../../components/common/";
// import {ThemeContext} from '../../context'
import React, { useContext } from "react";

export const HomePage: React.FC = () => {
  // const [context, setContext] = useContext(ThemeContext);
  return (
    <div>
      <div className="bg-white dark:bg-gray-800">
        <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
        <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
      </div>

      <button></button>
    </div>
  );
};
