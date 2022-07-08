import React from 'react'
import data from "../../Object.js"
import Shirtcomponent from './Shirtcomponent.js'

export default function Shirt()
{
    console.log(Object)
    let shirtData = data.filter(ele=>ele.type=="shirt")
    return (
        <Shirtcomponent data = {shirtData}/>
    )
}