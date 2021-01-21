import axios from "axios";
import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Searchbar from "./Searchbar";
import TodoItem from "./TodoItem";
import { TodoItemsState, TodoItemState } from "./todos.interface";
import { Route } from "react-router-dom";
import TodoComment from "./TodoComment";
import { createBrowserHistory } from "history";
import classNames from "classnames";

class Todos extends Component<{}, {}> {
  readonly API_URL = "/todos";
  todosBackup: TodoItemState[] = [];
  history = createBrowserHistory();

  state: TodoItemsState = {
    todos: [],
    term: '',
  };

  source = axios.CancelToken.source();

  abortController = new AbortController();

  componentDidMount() {
    this.getTodos();
  }

  componentWillUnmount() {
    this.source.cancel('Todos: Request canceled by user');
  }

  getTodos = async () => {
    const {data} = await axios.get(this.API_URL, {cancelToken: this.source.token})

    this.setState({todos: data})
  };

  deleteTodo = (id: number) => {
    axios.delete(`${this.API_URL}/${id}`).then(() => {
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      });

      this.history.replace("/todos");
    });
  };

  addTodo = (title: string) => {
    axios
      .post(`${this.API_URL}`, { title, completed: false })
      .then((response) =>
        this.setState({ todos: [...this.state.todos, response.data] })
      );
  };

  setComponentState(id: number, callback: (todo: TodoItemState) => void) {
    this.setState((state: TodoItemsState) => {
      return {
        todos: state.todos.map((todo: TodoItemState) => {
          if (todo.id === id) {
            callback(todo);
          }

          return { ...todo, ...todo };
        }),
      };
    });
  }

  toggleTodoCompleted = (id: number) => {
    this.setComponentState(id, (todo: TodoItemState) => {
      todo.completed = !todo.completed;
    });
  };

  enterEditMode = (id: number) => {
    this.setComponentState(id, (todo: TodoItemState) => {
      todo.isEditing = true;
      todo.backup = JSON.stringify(todo);
    });
  };

  exitEditMode = (id: number) => {
    this.setComponentState(id, (todo: TodoItemState) => {
      const backup = JSON.parse(todo.backup);

      todo.isEditing = false;
      todo.title = backup.title;
    });
  };

  onTodoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number(event.target.dataset.id);

    this.setComponentState(id, (todo: TodoItemState) => {
      todo.title = event.target.value;
    });
  };

  saveChanges = (id: number) => {
    const payload: TodoItemState = this.state.todos.find(
      (todo) => todo.id === id
    ) as TodoItemState;

    axios.put(`${this.API_URL}/${id}`, payload).then(() => {
      this.setComponentState(id, (todo: TodoItemState) => {
        todo.backup = null;
        todo.isEditing = false;
      });
    });
  };

  search = (term: string) => {
    if (!this.todosBackup.length) {
      this.todosBackup = [...this.state.todos];
    }

    this.setState({ term: term });

    if (term) {
      this.setState(() => {
        return {
          todos: this.todosBackup.filter((todo: TodoItemState) => {
            return todo.title.toLowerCase().includes(term.toLowerCase());
          }),
        };
      });
    } else {
      this.setState({ todos: this.todosBackup });
      this.todosBackup = [];
    }
  };

  isEmptySearchResult(){
    return this.state.term && !this.state.todos.length;
  }

  isLoadingTodos(){
    return !(this.state.term || this.state.todos.length);
  }

  contentIndicator() {
    if (this.isEmptySearchResult()) {
      return  <div className="no-search-result"> No todos found for <span className="fw-bold">{this.state.term}</span></div>

    } else if (this.isLoadingTodos()) {
      return <div className="ui active centered inline loader text"> Loading todos...</div>
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui grid">
          <div className="eight wide column">
            <AddTodo addTodo={this.addTodo} todos={this.state.todos} />
          </div>
          <div className="eight wide column">
            <Searchbar search={this.search} todos={this.state.todos} />
          </div>
        </div>

        <div className="todo-list">
          <div className="d-flex flex-row">
            <div className="flex-grow-1">
             
              <div className={classNames('ui middle aligned divided list item-container', {'loading-content': this.isLoadingTodos()})}>
                {this.contentIndicator()}
                {this.state.todos.map((todo: TodoItemState) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodoCompleted={this.toggleTodoCompleted}
                    deleteTodo={this.deleteTodo}
                    enterEditMode={this.enterEditMode}
                    exitEditMode={this.exitEditMode}
                    saveChanges={this.saveChanges}
                    onTodoInputChange={this.onTodoInputChange}
                  />
                ))}
               </div>
              Found: {this.state.todos.length}
            </div>
            <div className="flex-grow-0">
              <Route path={"/todos/:todoId/comments"} component={TodoComment} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Todos;
