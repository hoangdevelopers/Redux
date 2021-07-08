import { connect } from 'react-redux'
import TodoApp from '../component/TodoApp'
interface ITodoState {
    todo: {
        items: string[]
    }
}
const mapStateToProps = (state: ITodoState ) => {
    return {
        todos: state.todo.items
    }
}
const mapActionsToProps = {
}
export default connect(mapStateToProps,mapActionsToProps)(TodoApp)
