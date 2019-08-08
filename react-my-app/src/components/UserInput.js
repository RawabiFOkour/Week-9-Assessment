import React ,{component} from 'react';
import UserOutput from './UserOutput';


export default class UserInput extends component{

    state={

        title:''
    
      };

      addNewItem = (e) => {
        e.preventDefault();
        var title = (this.title.value).trim();
        this.props.addNewItem(title);
    }

  render(){
  return (
    <React.Fragment>
      <h1>input</h1>
      <form >
            <input type="text" name="title"
             placeholder="Add to list ...."
             style={{flex:"10", padding:'5px'}}
             ref={r => this.title = r}
             ></input>

            <input type="submit" onClick={this.addNewItem} value="Add" style={{flex:1}}></input>
        </form>


      <UserOutput />


    </React.Fragment>
  );
}
}