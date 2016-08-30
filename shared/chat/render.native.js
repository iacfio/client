// @flow
import React, {Component} from 'react'
import {Text, Box} from '../common-adapters'

export default class ChatRender extends Component {
  render () {
    return (
      <Box style={{flex: 1, justifyContent: 'space-between', alignItems: 'stretch', padding: 0}}>
        <Box style={{width: 100, height: 100, backgroundColor: 'red'}} />
        <Text type='Header'> Chat goes here </Text>
        <Text type='Header'> Always Money in the Banana Stand </Text>
        <Box style={{width: 100, height: 100, backgroundColor: 'blue'}} />
      </Box>
    )
  }
}
