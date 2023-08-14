import { Route, Routes} from 'react-router-dom'
import {Login, Dashboard, Customers, Products, ManageInvoice, AddNewBill} from './pages/pages'

function App() {
  return (
    <>

        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/manageinvoices' element={<ManageInvoice />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/products' element={<Products />} />
            <Route path='/add-new-bill' element={<AddNewBill />} />
            {/*    <Route path='*'/>*/}
        </Routes>
    </>
  )
}

export default App
