
import './App.css';
import {data} from './product'
import Product from './product/product'
function App() {

console.log(data)
  return (
    <div className="App">
     <Product data={data}></Product>
    </div>
  );
}

export default App;
