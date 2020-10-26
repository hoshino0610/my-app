import React from 'react';
// import 'App.css';

class User extends React.Component {

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

  handleDbRegClick(){

  }

  render() {
    const isToroku = this.state.isToroku;
    if (isToroku) {
      return (
        <div>
            <button className="user-button" onClick={this.handleRegClick}>
            ユーザ登録
          　</button>
          　<button className="user-button" onClick={this.handleSearClick}>
            ユーザ検索
          　</button>
            <p>{this.state.showForm?
            (
              <div>
              <h2>すべてのユーザ情報を入力して登録してください</h2>
              <input  id = "input1" placeholder="ユーザ名"/>
              <input  id = "input2" placeholder="メアド"/>
              <input  id = "input3" placeholder="権限区分"/>
              <input  id = "input4" placeholder="名前"/>
              <input  id = "input5" placeholder="パスワード"/>
              <button  onClick={this.handleDbRegClick}>
              登録
              </button>
            </div>
            ):null
            }</p>
        </div>
      )
    } else {
      return (
        <div>
            <button className="user-button" onClick={this.handleRegClick}>
            ユーザ登録
          　</button>
          　<button className="user-button" onClick={this.handleSearClick}>
            ユーザ検索
          　</button>
            <p>{this.state.showForm?
            (
              <div>
              <h2>任意のユーザ情報を入力して検索してください</h2>
              <input  placeholder="ユーザ名"/>
              <input  placeholder="メアド"/>
              <input  placeholder="権限区分"/>
              <input  placeholder="名前"/>
              <input  placeholder="パスワード"/>
              <button  onClick={this.handleDbSearClick}>
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

export default User;