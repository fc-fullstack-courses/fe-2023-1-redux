import React from 'react';
import { connect } from 'react-redux';
import './App.css';


function App(props) {
  const { counter, dispatch } = props;

  return (
    <div>
      <p>Current count is {counter}</p>
      <button >-</button>
      <button >+</button>
    </div>
  );
}

// отримує стейт зі стору редаксу
// повератє об'єкт, який додає до пропсів компоненту
// який під'єднуємо
function mapStateToProps(state) {

  // return state;

  return {
    counter: state.counter,
    secret: 'test data'
  }
}

// Компонент вищого порядку, який буде приймати
// Реактівський компонент і повертати інший компонент
// у якого буде в пропсах дані з mapStateToProps
// const withStoreData = connect(mapStateToProps);

// Підсумковий компонент
// const AppWithData = withStoreData(App);

// export default AppWithData;


export default connect(mapStateToProps)(App)
