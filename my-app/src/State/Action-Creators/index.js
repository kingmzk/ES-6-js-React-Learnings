export const DepositeMoney = (amount) =>
{
    return (dispatch) => 
    {
        dispatch({
            type: 'Deposite',
            payload: amount
        })

    }
}

export const WithdrawMoney = (amount) =>
{
    return (dispatch) =>
    {
        dispatch({
            type: 'Withdraw',
            payload: amount
        })
    }

}