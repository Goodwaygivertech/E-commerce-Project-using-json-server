import { useSelector } from 'react-redux';
import NavBar from '../features/navbar/Navbar';
import UserOrders from '../features/user/components/UserOrders';
import { selectUserOrders } from '../features/user/userSlice';
import { Navigate } from 'react-router-dom';
function UserOrdersPage() {
  const orders = useSelector(selectUserOrders);

  return (
    <>
 
    {!orders.length && <Navigate to='/' replace={true}></Navigate>}

    <div>
      <NavBar>
        <h1 className='mx-auto text-2xl'>My Orders</h1>
        <UserOrders></UserOrders>
      </NavBar>
    </div>
    </>
  );
}

export default UserOrdersPage;
