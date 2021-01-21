import axios from "axios";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import style from "./todoComment.module.scss";
import classNames from 'classnames';

const TodoComment = () => {
   const initialState: any = { comments: [] };
   const match = useRouteMatch();
   const [todo, setTodo] = useState(initialState);

   useEffect(() => {
     const source = axios.CancelToken.source();
     const getComment = async () => {
       const { data } = await axios.get(match.url, {
         cancelToken: source.token,
       });

       setTodo(data);
     };

     getComment();

     return () => {
       setTodo({ comments: [] });

       source.cancel("Comment: Request canceled by user");
     };
   }, [match.url]);

  return (
    <div className={classNames('ui card', `${style.comment}`, {'loading-content': !todo.comments.length})}>
      {!todo.comments.length && ( <div className="ui active centered inline loader text"> Loading comment...</div>)}
      
      <div className={classNames('content', {hide: !todo.comments.length})}>
        <div className="header">{todo.title}</div>

            <div className="meta">
              <span>2 days ago</span>
              <span>{todo.createdBy}</span>
            </div>
            {todo.comments.map((comment:string, id:number) => (
              <div key={id}>{comment}</div>
            ))}
      </div>

    </div>
  );
};

export default TodoComment;
