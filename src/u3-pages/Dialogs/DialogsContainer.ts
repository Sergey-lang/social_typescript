import {actions, DialogInitStateType} from '../../u4-redux/dialogs-reducer'
import {AppStateType} from '../../u4-redux/store'
import {connect} from 'react-redux'
import {Dialogs} from './Dialogs'
import {ComponentType} from 'react'
import {withAuthRedirect} from '../../u7-hoc/withAuthRedirect'
import {compose} from 'redux'

export type mapDispatchType = {
   addMessage: (dialogNewMessageText: any) => void
}
export type MapStateType = {
   dialogsPage: DialogInitStateType
}

let mapState = (state: AppStateType): MapStateType => ({dialogsPage: state.dialogsState})

export default compose<ComponentType>(
    connect<MapStateType, mapDispatchType, {}, AppStateType>
    (mapState, {addMessage: actions.addMessage}),
    withAuthRedirect
)(Dialogs)

