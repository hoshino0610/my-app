import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // ***** コンストラクタ追加して初期値の設定 *****
  constructor(props) {
    super(props);
    this.handleRegClick = this.handleRegClick.bind(this);
    this.handleSearClick = this.handleSearClick.bind(this);
    this.state = { showForm : false ,isToroku : false};
  }
  
  handleRegClick() {
    // *****登録用エリア表示 *****
    this.setState({showForm : true,isToroku : true});

  }
  handleSearClick() {
    // *****検索用エリア表示 *****
    this.setState({showForm : true,isToroku : false});
  }

  render() {
    const isToroku = this.state.isToroku;
    if (isToroku) {
      return (
        <div className="App">
          <h1>アカウント管理</h1>
            <button class="user-button" onClick={this.handleRegClick}>
            ユーザ登録
          　</button>
          　<button class="user-button" onClick={this.handleSearClick}>
            ユーザ検索
          　</button>
            <p>{this.state.showForm?
            (
              <div>
              <input  placeholder="ユーザ名"/>
              <input  placeholder="メアド"/>
              <input  placeholder="権限区分"/>
              <input  placeholder="名前"/>
              <input  placeholder="パスワード"/>
              <button  onClick={this.handleAddTodo}>
              登録
              </button>
            </div>
            ):null
            }</p>
        </div>
      )
    } else {
      return (
        <div className="App">
          <h1>アカウント管理</h1>
            <button class="user-button" onClick={this.handleRegClick}>
            ユーザ登録
          　</button>
          　<button class="user-button" onClick={this.handleSearClick}>
            ユーザ検索
          　</button>
            <p>{this.state.showForm?
            (
              <div>
              <input  placeholder="ユーザ名"/>
              <input  placeholder="メアド"/>
              <input  placeholder="権限区分"/>
              <input  placeholder="名前"/>
              <input  placeholder="パスワード"/>
              <button  onClick={this.handleAddTodo}>
              検索
              </button>
            </div>
            ):null
            }</p>
        </div>
      )
    }

  }
}

export default App;