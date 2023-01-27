import React, {useState} from "react";
import {Button} from "./Button";

type battonType = 'All' | 'Rubles' | 'Dollars'


type moneyDataType = {
    banknots: string
    value: number
    number: string
}

type MoneyType = moneyDataType[]

export const Filter = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [condButton, setButton] = useState<battonType>('All')

    let currentMoney = money;
    if (condButton === 'Rubles') {
        currentMoney = money.filter((obj: moneyDataType) => obj.banknots === 'RUBLS')
    } else if (condButton === 'Dollars') {
        currentMoney = money.filter((obj: moneyDataType) => obj.banknots === 'Dollars')
    }

    const onClikFilterHandler = (nameButton: battonType) => {
        setButton(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((el: moneyDataType) =>
                    (<li>{el.banknots} {el.value} {el.number}</li>))}
            </ul>
            <Button title={'All'} callback={() => onClikFilterHandler('All')}/>
            <Button title={'Rubles'} callback={() => onClikFilterHandler('Rubles')}/>
            <Button title={'Dollars'} callback={() => onClikFilterHandler('Dollars')}/>
        </>
    )
}
