import { useState } from 'react';
import {Route, Routes} from "react-router-dom";
import Alert from "./Components/Alert/Alert";
import Avatar from "./Components/Avatar/Avatar";
import Badge from "./Components/Badge/Badge";
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import Grid from "./Components/Grid/Grid";
import Image from "./Components/Image/Image";
import Input from "./Components/Input/Input";
import List from "./Components/List/List";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import Navigation from "./Components/Navigation/Navigation";
import Typography from "./Components/Typography/Typography";
import Welcome from './Pages/Welcome/Welcome';
import DocLayout from './Pages/DocLayout/DocLayout';
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/docs/getting-started' element={
              <DocLayout>
                  <Home/>
              </DocLayout>
            }>
            </Route>
            <Route
              path='/docs/avatar'
              element={
                <DocLayout>
                  <Avatar/>
                </DocLayout>
              }
            ></Route>
            <Route
              path='/docs/alert'
              element={
                <DocLayout>
                  <Alert/>
                </DocLayout>
              }
              >
            </Route>
            <Route
              path='/docs/badge'
              element={
                <DocLayout>
                  <Badge/>
                </DocLayout>
              }
            />
            <Route
              path='/docs/button'
              element={
                <DocLayout>
                  <Button/>
                </DocLayout>
              }
              ></Route>
            <Route
              path='/docs/card'
              element={
                <DocLayout>
                  <Card/>
                </DocLayout>
              }
              ></Route>
            <Route
              path='/docs/image'
              element={
                <DocLayout>
                  <Image/>
                </DocLayout>
              }
            ></Route>
            <Route
              path='/docs/input'
              element={
                <DocLayout>
                  <Input/>
                </DocLayout>
              }
            ></Route>
            <Route
              path='/docs/typography'
              element={
                <DocLayout>
                  <Typography/>
                </DocLayout>
              }
              ></Route>
            <Route
              path='/docs/list'
              element={
                <DocLayout>
                  <List/>
                </DocLayout>
              }
            ></Route>
            <Route
              path='/docs/navigation'
              element={
                <DocLayout>
                  <Navigation/>
                </DocLayout>
              }
              ></Route>
            <Route
              path='/docs/grid'
              element={
                <DocLayout>
                  <Grid/>
                </DocLayout>
              }
              ></Route>
            <Route
              path='/docs/modal'
              element={
                <DocLayout>
                  <Modal/>
                </DocLayout>
              }
            ></Route>
        </Routes>
    </>
  )
}

export default App
