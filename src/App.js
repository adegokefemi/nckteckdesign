import React, {Fragment} from 'react';
import Header from './Components/Layout/Header';
import PaymentInfo from './Components/Layout/PaymentInfo';
import PurchaseHistory from './Components/PurchaseHistory';
import CompletePayment from './Components/CompletePayment';

function App() {
  return (
    <Fragment>
      <Header/>
      <PaymentInfo/>
      <PurchaseHistory />
      <CompletePayment />
    </Fragment>
    
  );
}

export default App;
