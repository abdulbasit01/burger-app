import React from 'react';
import Layout from "./components/layouts/layout"
import BurgerBuilder from "./container/burgerbuilder/burgerbuilder"
function App() {
  return (
    <div className="App">
      <Layout>
          <BurgerBuilder/>
      </Layout>
      
    </div>
  );
}

export default App;
