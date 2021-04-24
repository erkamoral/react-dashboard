import ChartsComponent from './components/charts'
import Nav from './components/navbar'
import CardComponent from './components/cards'
import TableComponent from './components/table'
import LineChart from './components/linechart'
import UserCard from './components/dropdown'
import './assets/styles.css'
import malwation from './assets/img/malwation.png'

//Creating App component for render
const App = () =>
<div>
  <div className=" mx-10 rounded-3xl logo-header my-2">
    <div className="flex justify-center">
        <img className="malwation mt-3" alt="Logo" src={malwation}/>
      </div>
    <div className="user-dropdown col-start-8 mt-2">
        <div className=" flex justify-end">
        <UserCard />
        </div>
    </div>
  </div>
<div className="mx-10 rounded-3xl">
  <div className="grid grid-cols-12"> 
    <div className="wrap col-span-1">
      <Nav />
    </div>
    <div className="col-start-2 col-span-11">
      <CardComponent />
      <div className="space-x-10 grid grid-cols-12">
        <div className="col-span-8 mt-3">
          <LineChart />
        </div>
        <div className=" col-span-4 mt-3" >
        <ChartsComponent />
        </div>
      </div>   
    </div>
  </div>
  <div className="py-3">
         <TableComponent />
      </div>
</div>
</div>

export default App
