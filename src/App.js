import React, { Component } from 'react';
import { List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
];

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <List
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
    </div>
    )
  }
}

export default App;
