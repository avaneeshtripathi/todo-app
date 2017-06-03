// Import React
import React from 'react';
import _ from 'underscore';
import TodoItems from './TodoItems';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {red500, deepOrangeA400,deepOrangeA700,blue500} from 'material-ui/styles/colors';

var ToDoList = React.createClass({
  getInitialState () {
    return {
      items: [],
      itemValue: '',
      collapse: false
    };
  },

  componentWillMount(){
    this.checkEmptyList();
  },

  addItem(event){
    event.preventDefault();
    let itemArray = this.state.items,
        listInput = this.refs.listInput;

    itemArray.push({
      text: this.state.itemValue,
      timeDate: Date.now()
    });

    this.setState({
      items: itemArray
    });

    listInput.value = "";
  },

  handleInputChange(e){
    this.setState({
      itemValue : e.target.value
    });
  },

  handleDelete(itemToDelete, e){
    var newItems = _.reject(this.state.items, (item) => item == itemToDelete);
    this.setState({
      items: newItems
    });
  },

  changeDisplayState(){
    this.setState({
      collapse: !this.state.collapse
    })
  },

  toggleInputDiv(){
    this.changeDisplayState();
  },

  hideTaskInput(){
    this.changeDisplayState();
  },

  checkEmptyList(){
    if(this.state.items.length == 0){

    }
  },

  setComponentState (stateData) {
    this.setState(stateData);
  },

  render() {
      return (
        <div className="mainContainer">
        <AppBar title="To Do" className="titleBar"/>
          <div className="toDoList">
            <h3>What are the things you want to get done today? </h3>
            <div className="listContainer">
              <TodoItems data={this.state.items} handleDelete={this.handleDelete} setParentState={this.setComponentState} />

              <form onSubmit={this.addItem} className="taskForm">

                <div className={ !this.state.collapse ? 'addTaskLink' : 'hide'} onClick={this.toggleInputDiv}>
                  <FontIcon color={deepOrangeA400}
                    className="material-icons iconBtns">add</FontIcon>
                  <span className="addTextLink">Add Task</span>
                </div>
                <div className={this.state.collapse ? 'taskInputBox': 'hide'} >
                  <textarea type="text" ref="listInput" placeholder="Enter Task..."
                  onChange={this.handleInputChange} rows="2" required></textarea>
                  <RaisedButton label="Add Task" primary={true} className="addBtn" type="submit" />
                  <span onClick={this.hideTaskInput} className="cancelLink">Cancel</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
  }
});

export default ToDoList;
