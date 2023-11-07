import React from 'react'
import Card from "./Card"
import imgh from "../../images/img-1.jpg"
import img2 from "../../images/img-2.jpg"


export default{
    title:'Card',
    component: Card
}

export const titlecard = () => <Card
title="Card title"
/>


export const imgcard = () => <Card
title="Card title"
body="Some quick example text to build on the card title and make up the bulk of the card's content."
Image={imgh}
/>

// export const footercard = () => <Card
// title="Card title"
// body="Some quick example text to build on the card title and make up the bulk of the card's content."
// Image={img2}
// />