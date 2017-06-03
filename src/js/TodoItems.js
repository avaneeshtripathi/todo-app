import React from 'react';
import _ from 'underscore';
import FontIcon from 'material-ui/FontIcon';
import {red500, deepOrangeA400,deepOrangeA700,blue500} from 'material-ui/styles/colors';

var TodoItems = React.createClass({

  getInitialState(){
    return{
      checked: false,
      editableListItem: null
    };
  },

  tickedItem(event){
    if (event) {
  	  let targetElementClass = event.target.classList;
      if (targetElementClass.contains('checkedLabel')) {
  	    this.handleCheckListClass(targetElementClass, 'checkedLabel', 'uncheckedLabel');
      } else {
  	    this.handleCheckListClass(targetElementClass, 'uncheckedLabel', 'checkedLabel');
  	  }
    }
  },

  handleCheckListClass (targetElementClass, preClass, newClass) {
    targetElementClass.remove(preClass);
    targetElementClass.add(newClass);
  },

  editListItem (data, key, event = new Event('')) {
    event.preventDefault();
    this.setState({
      editableListItem: key
    })
  },

  updateListItem (data, key, event = new Event('')) {
    let toDoList = this.props.data;
    toDoList[key].text = this.refs['item' + key].value;
    this.props.setParentState({
      items: toDoList
    })
    this.setState({
        editableListItem: null
    })
  },

  render(){
    let todoEntries = this.props.data;
    return(
        <ul className="todoListItems">
          {
            _.map( todoEntries , (data, key) =>{
              return(
                <li key={key}>
                  <label className={ this.state.checked ? 'pull-left checkedLabel' : 'pull-left uncheckedLabel'}
                    onClick={this.tickedItem}>
                   </label>
                  {this.state.editableListItem === key
                    ? <div>
                        <input type="text" ref={'item' + key} defaultValue={data.text} />
                        <FontIcon onClick={this.updateListItem.bind(this, data, key)} color={deepOrangeA400}
                          className="material-icons iconBtns">delete_sweep</FontIcon>
                      </div>
                    : <div>
                        <span className="pull-left listName">{data.text}</span>
                        <FontIcon onClick={this.editListItem.bind(this, data, key)} color={deepOrangeA400}
                          className="material-icons iconBtns">delete_sweep</FontIcon>
                      </div>
                  }
                  <FontIcon onClick={this.props.handleDelete.bind(null, data)} color={deepOrangeA400}
                    className="material-icons pull-right iconBtns">delete_sweep</FontIcon>
                  <div className="clear"></div>
                </li>
              )
            })
          }
        </ul>
    );
  }
});

export default TodoItems;
