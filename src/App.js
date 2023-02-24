import Header from './componets/header/header';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Content from './componets/content/content';
import { SectionColumn } from './componets/main/section-column';
import RoutesContent from './componets/content/Routes/routes-content';
import ChooseRoute from './componets/content/choooseRoute/chooseRoutes';


function App(props) {

  return (
    <div>
      <div className='pages'>
        <div className='container'>
          <Header />
          <Content data={props.content} />
        </div>
      </div>
      <SectionColumn state={props.state}/>
      <RoutesContent />
      <ChooseRoute />
    </div>
  );
}

export default App;
