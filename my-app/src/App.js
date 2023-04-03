import React from 'react';
import './App.css';
// import Header from './components/Header';
import { Header } from './components/Header';
import Cheader from './components/Cheader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunction from './components/CFunction';
import Stylesheet from './components/Stylesheet';
import './components/Style.css';
import Inline from './components/Inline';
import '../src/appstyle.css';
import Styles from "../src/appstyle.module.css";
import Form from './components/Form.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import LifecycleA from './components/LifecycleA';
import Product from './components/Product';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect'
import HookObject from './components/HookObject';
import HookArray from './components/HookArray';
import TestFormValidation from './components/TestFormValidation';
import XY from './components/XY';
import ContextApi1 from './components/ContextApi1';
import ContextApi2 from './components/ContextApi2';
import King1 from './components/King1';
import King from './components/King';
import { SignUpFormValidation } from './components/SignUpFormValidation';
import ShopRedux from './components/ShopRedux';
import { Provider } from 'react-redux';
import store from './State/store';

/*
const variable = <span>Hello React Once Again</span>
const withoutJsx = React.createElement('h2',{className:'withoutJsx'},"Hello WIthout JSX")
const age = (a) =>
{
  if(a<18)
  {
    return <span>You are Not eligible</span>
  }
  else
  {
    return <span>Congratulations! You are eligible</span>
  }
}

function App() {
  return (
    <div className="App">
     <h1>Hello MZK, {variable}</h1>
     {withoutJsx}
     {age(20)}
    </div>
  );
}

export default App;


*/


//CLASS COMPONENT

class App extends React.Component
{

  render()
  {
    const numbers = [2, 4, 6, 8, 10]
    return (
      <>
{/* 
        <BrowserRouter>
          <NavBar />
          <Routes>
           
            <Route path="/all" element={<Channel />} />
            <Route path="/add" element={<Form />} />

          </Routes>
        </BrowserRouter> */}

        {/* <LifecycleA/> */}

        {/* <Product/> */}


        {/*  <h1>Hello This is CLass Component</h1>
        <Header name="khizar" last="ayub">
        <p>Khizar is a Good Friend?</p>
        </Header>
        <Header name="Siddiq" last="pasha">
        <a href=''>Click Here</a>
        </Header>
        <Header name="Anuj" last="Guggu"/>


        <Cheader name="Anuj" last="Guggu">
        </Cheader>

        <Channel/>

        <FunctionClick/>

        <CFunction roll="21" numbers={numbers}/>                                

        <Stylesheet isValue={false}></Stylesheet>
        <Inline/>

        <h1 className='onlycss'>onlycss</h1>
        <h1 className={Styles.cssmodule}>cssmodule</h1>  */}      {/*IF WE USE MODULE CSS IT IŚ SPECIFIC WHICH IS NOT IN NOMAL CSS FILE */}

        {/* <Form/> */}

        {/* <PostList/> */}

        {/* <PostForm/> */}

        {/* <UseState/> */}

        {/* <UseEffect/> */}

        {/* <HookObject/> */}

        {/* <HookArray/> */}

        {/* <TestFormValidation/> */}

        {/* <XY/> */}

        {/* <ContextApi1/> */}

        {/* <King/>

        <King1/> */}

        {/* <SignUpFormValidation/> */}

        <div className='container'>
        <Provider store={store}>

        
        <BrowserRouter>
          <NavBar />
          <Routes>
           
            <Route path="/all" element={<Channel />} />
            <Route path="/add" element={<Form />} />

          </Routes>
        </BrowserRouter>
            <ShopRedux />
            </Provider>
        </div>

      </>
    )
  }
}

export default App;






