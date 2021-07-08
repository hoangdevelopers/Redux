import { connect } from 'react-redux'
import TodoApp from '../component/TodoApp'
const mapStateToProps = (state: string[] ) => {
    return {
        todos: state.todo.items
    }
}
const mapActionsToProps = {
}
export default connect(mapStateToProps,mapActionsToProps)(TodoApp)