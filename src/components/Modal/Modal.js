import { Component } from "react"
import {createPortal} from 'react-dom'
import { BackDrop, Content } from "./Modal.styled"

const modalRoot = document.querySelector("#modal-root")

export class ModalWindow extends Component {
  componentDidMount() {
    console.log('App componentDidMount')
    window.addEventListener('keydown', this.handleKeyDown)
  }

  
  componentWillUnmount() {
    console.log('App componentWillUnmount')
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        console.log('Pushed Esc');
        this.props.closeModal();
      }
  }
  

  handleBackDropClose = (evt) => {
    console.log('Clicked in BackDrop')
    console.log('currentTarget',evt.currentTarget)
    console.log('target', evt.target)

    if (evt.currentTarget === evt.target) {
      this.props.closeModal()
    }
  
  }
    

render() {
  return createPortal(
        <BackDrop onClick={this.handleBackDropClose}>
          <Content>{this.props.children}</Content>
   </BackDrop>, modalRoot)
  
  }
  
}

  