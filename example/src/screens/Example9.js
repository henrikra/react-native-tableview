import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import TableView from 'react-native-tableview'

const { Section, Item, Cell } = TableView

class Example9 extends React.Component {
  newTable = React.createRef()

  state = {
    users: [],
  }

  addMore = () => {
    this.setState(
      {
        users: [
          ...this.state.users,
          { name: 'Some guy' + Math.random() },
          { name: 'Some guy' + Math.random() },
          { name: 'Some guy' + Math.random() },
        ],
      },
      () => {
        this.newTable.current.scrollToIndex({
          index: this.state.users.length - 1,
        })
      }
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Add 3 items" onPress={this.addMore} />

        <TableView style={{ flex: 1 }} ref={this.newTable}>
          <Section>
            {this.state.users.map(a => (
              // <Item key={a.name}>{a.name}</Item> //this works
              <Cell key={a.name}><Text style={{padding: 20}}>{a.name}</Text></Cell> // this does not work!
            ))}
          </Section>
        </TableView>
      </View>
    )
  }
}

export default Example9
