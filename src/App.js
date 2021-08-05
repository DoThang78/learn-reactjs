import { Route, Switch } from 'react-router';
import ProductFeature from './features/Product';

function App() {
    // const [todoList, setTodoList] = useState([
    //     { id: 1, title: 'hello' },
    //     { id: 2, title: 'xin chao' },
    //     { id: 3, title: 'chaos' },
    // ]);

    // function handleTodoClick(todo) {
    //     const index = todoList.findIndex((x) => x.id === todo.id);
    //     if (index < 0) return;

    //     const newTodoList = [...todoList];
    //     newTodoList.splice(index, 1);
    //     setTodoList(newTodoList);
    // }
    return (
        <Switch>
            <Route path="/products" component={ProductFeature} />
        </Switch>
    );
}

export default App;
