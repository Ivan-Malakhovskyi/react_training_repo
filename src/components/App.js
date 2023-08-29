import { Component } from "react"
import { ModalWindow } from "./Modal/Modal"



export class App extends Component {
  state = {
    showModal: false,
    hasError: false,
  }



//   componentDidUpdate(prevProps,prevState) {
//     console.log('App componentDidUpdate')
//     console.log(prevProps)
//     console.log(prevState)
//   }


  //* Рідше використовуються


  // getDerivedStateFromProps() {
  //     //! Виколикається до render()
  // }
  // shouldComponentUpdate() {
  //    //! Виколикається до render()
  //  }

  //  getSnapshotBeforeUpdate() {
  //   //? Виколикається після render()
  // }


  componentDidCatch(error, info) {
    
    this.setState({
      hasError: true,
    })
  //   ? Ловить помилки лише у дітей, але не в самому батьку
  
  //   *error -  результат toString() об'єкта помилки
  // * info - об'єкт, що описує stack trace
  }

  
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }


  render() {

    if (this.state.hasError) {
      return <h1>Something went wrong, please try again later :</h1>
    }

    const {showModal} = this.state

    return (
      <div>
        <h1>Modal window</h1>
      <button type="button" onClick={this.toggleModal}>Show modal</button>

        {showModal && (
          <ModalWindow closeModal={this.toggleModal}>
          <h2>This is a content modal window as a children</h2>
          <p>
            Research and confirm brands that present the strongest digital growth opportunities and minimize risk.
            Our goal is to ident ify the business problem to walk away with the perfect and creative solution.
            Bring the key message to the brand's audience for the best price within the shortest possible time
            Design practice focused on digital experiences. We bring forth a deep passion for problem-solving
          </p>
            <button type="button" onClick={this.toggleModal}>Close modal</button>
        </ModalWindow>
        )}
      </div>
    )
  }
}



// export class App extends Component  {

  
//   handleInputChange = (evt) => {
//     evt.preventDefault()
//     // console.log(evt.currentTarget.value)
    
//     this.setState({
//       login: evt.currentTarget.value
//     })
//   }  


//   handleSubmitForm = (e) => {
//     e.preventDefault()
//     console.log(e.state)
//   }

//   render() {
// const {login,email} = this.state

//     return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >

//            <form onSubmit={this.handleSubmitForm}>
//           <label htmlFor="">Name
//             <input type="text" placeholder="Enter login" value={login} onChange={this.handleInputChange} />
//           </label>
//           <button type="submit">Sign up as</button>
//         </form>
     
       
       
//     </div>
//   );
//   }
// };





// export class User extends Component {

//   static defaultProps = {
//     value: 0,
//        step: 1,
//         initialValue: 0,          //* Так описуються дефолтні Значення (статичні властивості)
//   }
  


//     // constructor() {
//     //     super()
//     //     this.state = {
//     //         value: 0,
//     //     }
//     // }

//     //! Аналогічі записи 

//     state = {
//         value: this.props.initialValue,
//     }
//     handlerIncrement = () => {
            
//         this.setState({
//             value: 10,    //! Значення змінюються лише через setState , передається у функцію setState об'єкт 
//                             //! з властивостями, які потрібно оновити(записування поверх) ТОБТО ОБ'ЄКТ
//         })      



//         //* Якщо необіхідно від попереднього стану щось додати, а не просто записати поверх (ТОБТО ФУНКЦІЯ)


//         this.setState(prevState => ({  value: prevState.value + 1}))



//     }
    

//     handleDecrement = () => {
//         this.setState(prevState => ({
//             value: prevState.value - 1,
//         }))
//     }


//     handlerSome = (evt) => {            //*evt обгортка синтетична
//                                         //* Стрілочна функція автоматично прив'зує контекст
//         console.log('Some click')   //* Публічна властивість класу
//         console.log(this)
//         console.log(evt.target)


//         const event = evt.target
//         setTimeout(() => {
            
            
//             console.log(event)
//             //* Щоб збеерегти івент в асинхронгому коді, потрібно його зберегти в змінну, оскільк ив синхронному коді івент
//             //* автоматично очищаєтьсяя
            
//         }, 100);
//   }
  

//   toggle = () => {
//   this.setState(state => ({isOpen: !state.isOpen}))
// }

//   render() {
//         const { isOpen } = this.state;
//     const { children } = this.props;
//     const { step } = this.props;

//       return (
//         <div>
//         <span>0</span>
//         <button type="button" onClick={this.handlerIncrement}>Increment by {step}</button>
//           <button type="button" onClick={this.handleDecrement}>Decrement by {step}</button>
//           <button type="button" onClick={this.toggle}>{isOpen ? 'Hide' : 'Show' }</button>
        
//       </div>)
//     }
// }


// export default function FirstComponent() {
//   return (<>
//     <h1>My first component</h1>
//     <h1>My first component</h1>
//     <h1>My first component</h1>
//     <h1>My first component</h1>
//     <h1>My first component</h1>
//       <h1>My first component</h1>
//   </>
  
  
//   )
// }


// //* Вкладені пропи треба розпиляти , тому що реакт цього не зробить, 
// //* він робить це лише з пропами верхнього рівня, бо властивості видаляться попередні