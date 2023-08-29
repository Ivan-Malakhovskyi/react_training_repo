import { Component } from "react"
import {createPortal} from 'react-dom'
import { BackDrop, Content } from "./Modal.styled"

const modalRoot = document.querySelector("#modal-root")

export class ModalWindow  extends Component {
render() {
  return createPortal(
        <BackDrop>
          <Content>{this.props.children}</Content>
   </BackDrop>, modalRoot)
  
}
}

  