import { Children } from "react"
function customRender(reactElement,container){
    const dom=document.createElement(reactElement.type)
    domElement.innerHtml=
}
const reactElement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  Children:'Click me to visit google'
} 

const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer)\
