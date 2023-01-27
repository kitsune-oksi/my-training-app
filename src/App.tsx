import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion1";
import {Raiting} from "./components/Rating/Rating";
import {Filter} from "./components/Filter";
import Accordion1 from "./components/Accordion/Accordion1";
import Accordion2 from "./components/Accordion/Accordion2";
import { UncontroledAccordion } from './components/Accordion/UncontroledAccordion';
import {UncontroledRaiting} from "./components/UncontroledRating/UncontroledRating";

// ___________Lesson Map___________
// type topCarsType = {
//     cars: Array<CarsType>
// }
//
// type CarsType = {
//     manufacturer:string
//     model:string
// }
//
// const topCars = [
//     {manufacturer:'BMW', model:'m5cs'},
//     {manufacturer:'Mercedes', model:'e63s'},
//     {manufacturer:'Audi', model:'rs6'}
// ]
//
// const Cars = (props: topCarsType) => {
//     return (
//         <ul>
//             {props.cars.map((c, index) => {
//                 return (
//                     <li>{index+1} {c.manufacturer} model: {c.model}</li>
//                 )
//             })}
//         </ul>
//     )
// }
// _____________

// ___________Lesson Button___________
// const foo1 = () => {
//     console.log(100200)
// }
// ______________


function App() {
    // let[a, setA] = useState(100200)
    // const foo2 = (num: number) => {
    //     setA(a=0)
    // }

    return (
        <>
            <AppTitle title={'This is APP component!'}/>
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Accordion1 title={'Menu'} collapsed={true}/>
            <Accordion1 title={'Numbers'} collapsed={false}/>
            <AppTitle title={'My page'}/>
            <Accordion2 title={'Controled Accordion'} collapsed={false}/>
            <UncontroledAccordion title={'Uncontroled Accordion'} />
            <UncontroledRaiting/>
            {/*<Filter/>*/}

            {/*<Cars cars={topCars}/>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<h1>{a}</h1>*/}
            {/*<button onClick={() => foo2(a)}>0</button>*/}
        </>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    return <h1> {props.title} </h1>
}

export default App;
