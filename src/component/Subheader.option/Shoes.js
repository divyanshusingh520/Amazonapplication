import React from 'react'
import data from "../../Object.js"
import Shoescomponent from './Shoescomponent.js'

export default function Shoes()
{
    console.log(Object)
    let shoesData = data.filter(ele=>ele.type=="Shoes")
    return (
        <Shoescomponent data = {shoesData}/>
    )
}