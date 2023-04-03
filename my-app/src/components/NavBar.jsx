import { AppBar, Toolbar, styled } from '@mui/material';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    const amount = useSelector(state => state.amount)

    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact>Code for Interview</Tabs>
                <Tabs to="all" exact>All Users</Tabs>
                <Tabs to="add" exact>Add User</Tabs>
                <button disabled={true} className='btn btn-primary'>Your Balance : {amount} </button>
            </Toolbar>
        </Header>
    )
}

export default NavBar;