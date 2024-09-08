import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = ({ actionUrl }) => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Payment Page</h1>
      <form method="post" action={actionUrl} className="mt-5 card p-3">
        <div className="mb-3">
          <label htmlFor="method" className="form-label">Payment method</label>
          <input id="method" type="text" className="form-control" name="method" value="Paypal" readOnly />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input id="amount" type="number" className="form-control" name="amount" defaultValue="10.0" />
        </div>
        <div className="mb-3">
          <label htmlFor="currency" className="form-label">Currency</label>
          <select className="form-control" id="currency" name="currency">
            <option value="USD" selected>USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input id="description" type="text" className="form-control" name="description" />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">Pay with Paypal</button>
        </div>
      </form>
    </div>
  );
};

export default Index;
