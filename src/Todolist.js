import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store";
import { getInputChangeAction, getBtnClickAction, getItemDeleteAction, initListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    // 订阅store
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }

  componentDidMount() {
    axios.get('http://localhost:8081/zhihu/getProblemList').then((res) => {
      const data = res.data;
      const action = initListAction(data.data);
      store.dispatch(action);
    })
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getBtnClickAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getItemDeleteAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
