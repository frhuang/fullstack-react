import React, { Component } from 'react'
import NameAdd from './name-add'
import NameLists from './name-lists'

export default class NameManager extends Component {
    handleNameAdd() {
        this.refs.nameList.update()
    }
    render() {
        return (
            <div>
                <NameAdd onAdded={this.handleNameAdd.bind(this)} />
                <NameLists ref="nameList" />
            </div>
        )
    }
}
