import React from 'react';
import Layout from "./components/layouts/layout"
import BurgerBuilder from "./container/burgerbuilder/burgerbuilder"
import Blog from "./HTTPREQUEST/Blogs/blog"
function App() {
  return (
    <div className="App">
      <Layout>
          <BurgerBuilder/>
      </Layout>
        {/* <Blog/> */}
    </div>
  );
}

export default App;
