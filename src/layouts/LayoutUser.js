import React from 'react';
import Footer from '../components/layout/Footer';
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";

export function LayoutUser({ children }){
  const navigate = useNavigate();
  const roleid = localStorage.getItem('roleid');

  const handleChange = event => {
    console.log('Label ', event.target);
    console.log(event.target.value);
    const val = event.target.value;
    if(roleid == 1){
      console.log('inside first if');
      if(val == '/ratings' || val == '/complaints'){
        console.log('Inside if - state-true');
        navigate(event.target.value, { state: {giveFlow: true}});
      }
      else{
        navigate(val);
      }
    }
    navigate(val);
  };

  return (
  <>
    <div className="header-nav-inner">
    <ul className={
        classNames(
        'list-reset text-xs',
        `header-nav-left`
        )}
        style={{display:'flex',justifyContent:'flex-end',padding:'8px'}}>
    <li style={{paddingTop: '8px',paddingRight:'5px',width:'180px' }}>

    <select name="options" id="options" onChange={handleChange} style={{width:'175px',padding:'5px'}}>
      {roleid == 1? <><option id='action' value="">Action center â</option>
    <option id='rent' value="/search">Search for pet â</option>
    <option id='order' value="/reservations">Order history âž</option>
    <option id='rating' value="/ratings">Give rating đ</option>
    <option id='complaint' value="/complaints">Raise complaint â</option>
    <option id='chat' value="/chat">Chat section âŠ</option>
    <option id = 'recommendation' value='/recommendation'>Check recommendations ÂŽ</option>
  <option id='logout' value="/">Logout âšī¸</option></>
   : null}

  {roleid == 2? <><option id='action' value="">Action center â</option>
    <option id='register' value="/petRegistration">Register pet â</option>
    <option id='order' value="/reservations">Pet bookings âž</option>
    <option id='rating' value="/ratings">Pet ratings đ</option>
    <option id='complaint' value="/complaints">Complaints â</option>
    <option id='order' value="/refund">Refunds âž</option>
    <option id='chat' value="/chat">Chat section âŠ</option>
  <option id='logout' value="/">Logout âšī¸</option></> : null}

  {roleid == 3? <><option id='profile' value="">Action center â</option>
  <option id='order' value="/reservations">Order history âž</option>
    <option id='approval' value="/approvals">To do - Approvals âž</option>
    <option id='rent' value="/complaints">Customer complaints â</option>
    <option id='order' value="/refund">Refund requests âž</option>
    <option id='chat' value="/chat">Chat section âŠ</option>
  <option id='logout' value="/">Logout âšī¸</option></> : null}
    
</select>
    </li>
    </ul>
    </div>

    <main className="site-content">
      {children}
    </main>

    <Footer />
   </>

)};

export default LayoutUser;  