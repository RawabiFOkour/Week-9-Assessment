import React ,{component} from 'react';
import UserInput from './components/UserInput';

export default class App extends component{
  addNewItem = (title) => {
    
    const newItem = {
      id: uuid.v4(),
      title,
      isCompleted: false
    }
    this.setState({ tasks: [...this.state.tasks, newItem] })
  }


  render(){
  return (
    <React.Fragment>

      
<h1>hello</h1>
     <UserInput />

    </React.Fragment>
  );
}
}


