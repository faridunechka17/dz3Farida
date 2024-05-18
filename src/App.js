import React from 'react';
import MainPage from "./pages/MainPage/MainPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import AboutPage from "./pages/AboutPage/AboutPage";

const App = () => {
    return (
        <div>
          <MainPage/>
            <TodosPage/>
            <AboutPage/>
        </div>
    );
};

export default App;