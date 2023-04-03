import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../State/index'


const ShopRedux = () =>
{
  const dispatch = useDispatch()

  // const actions = bindActionCreators(ActionCreators, dispatch)

  const { DepositeMoney, WithdrawMoney } = bindActionCreators(ActionCreators, dispatch)


  return (
    <>
      <h2>Deposite/Withdraw</h2>
      {/* <div style={{ display: 'inline-block' }}>
        <button className='btn btn-primary' onClick={() => dispatch(ActionCreators.WithdrawMoney(100))}><h2>-</h2></button>
      </div>

      <h1 style={{ display: 'inline-block', margin: '0 10px' }}><h2>Update balance</h2></h1>

      <div style={{ display: 'inline-block' }}>
        <button className='btn btn-primary'  onClick={() => dispatch(ActionCreators.DepositeMoney(100))}><h2>+</h2></button>
      </div> */}




      <div style={{ display: 'inline-block' }}>
        <button className='btn btn-primary' onClick={() => WithdrawMoney(100)}><h2>-</h2></button>
      </div>

      <h1 style={{ display: 'inline-block', margin: '0 10px' }}><h2>Update balance</h2></h1>

      <div style={{ display: 'inline-block' }}>
        <button className='btn btn-primary' onClick={() => DepositeMoney(100)}><h2>+</h2></button>
      </div>

    </>
  )
}

export default ShopRedux;
