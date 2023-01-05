import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Star} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <AppTitle title={'This is APP component!'}/>
            <Star value={0}/>
            <Star value={1}/>
            <Star value={2}/>
            <Star value={3}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Numbers'} collapsed={false}/>
            <AppTitle title={'My page'}/>
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}
function AppTitle(props: AppTitlePropsType) {
    return <h1> {props.title} </h1>
}

export default App;
