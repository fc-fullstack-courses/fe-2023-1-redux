import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home';
import './App.css';
import SignUpPage from './pages/SignUp';

function App(props) {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  );
}

// отримує стейт зі стору редаксу
// повератє об'єкт, який додає до пропсів компоненту
// який під'єднуємо
// function mapStateToProps(state) {

//   // return state;

//   return {
//     counter: state.counter,
//     step: state.step
//   }
// }

// Компонент вищого порядку, який буде приймати
// Реактівський компонент і повертати інший компонент
// у якого буде в пропсах дані з mapStateToProps
// const withStoreData = connect(mapStateToProps);

// Підсумковий компонент
// const AppWithData = withStoreData(App);

// export default AppWithData;


// export default connect(mapStateToProps)(App)

export default App;

/*
  Redux
    store - JS об'єкт з глобальним стейтом
    dispatch - функція, яка відправляє екшени до ред'юсеру
    ред'юсер - чиста функція, приймає стейт і екшен і повертає нове значення стейту
    екшени - аналог подіі, який дозволяє ред'юсеру зрозуміти що відбулося (зазвичай об'єкт)

  react-redux
    Provider - під'єднує стору до реакт-додатку
    connect - підписує компонент до частини стейту стори
    mapStateToProps - функція,я ка каже що саме віддається зі стору
*/