
import './App.css'
import EmployeeCard from './components/EmployeeCard'
import EmployeeDashboard from './EmployeeDashboard'
import Header from './header'
import './styles.css'
import UserDashboard from './UserDashboard'
import UserList from './Users'

function App() {
  

  return (
    <div>
    <EmployeeDashboard />
    <Header />
    <EmployeeCard />
    <UserDashboard />
    <UserList />
   
   </div>
  )
}

export default App
