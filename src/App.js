import CompleteRegister from "./components/CompleteRegister"
import Register from "./components/Register"
import Accordion from "./components/accordion"
export default function Approuter() {
  const [users,setUsers] =useState([])
  useEffect(() => {
    fetch("http://localhost:8000/users")
    .then(res => res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Register users={users}></Register>}></Route>
             <Route path='/signup' element={<Signup/>}/>
            <Route path='/register/complete' element={<CompleteRegister></CompleteRegister>}></Route>
            <Route path='/help' element={<Accordion></Accordion>}></Route>
            <Route path='*' element={<NotFound/>}/>
        </Route>
    </Routes>
</Router>
  )
}
 
