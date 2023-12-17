import Cards from './components/Cards'
import './App.css';
import reviews from './Data'

function App() {
  return (
    <div className=" bg-gray-200 flex flex-col w-[100vw] h-[100vh] justify-center items-center ">
      <div className='text-center '>
        <h1  className="text-4xl font-bold">Our Testimonial</h1>
      </div>
      <div className=' bg-violet-400 h-[4px] w-1/5 mt-1'></div>
      <div>
        <Cards reviews={reviews} ></Cards>
      </div>

    </div>
  );
}

export default App;
