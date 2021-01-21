import classNames from "classnames";
import React, { MouseEvent, useEffect, useState } from "react";
import { SearchbarProps } from "./todos.interface";

const Searchbar  = (props: SearchbarProps) => {
  const [term, setTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const {search} = props;

  useEffect(() => {
    setIsSearching(true);

    const timeoutId = setTimeout(() => {
      setIsSearching(false);
      search(term);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search, term]);
  

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value.trim());
  };

  const onIconClick = (event: MouseEvent) => {
    if (event.currentTarget.classList.contains('remove')) {
      setTerm('');
    }
  };

    return (
      <form className="ui form" autoComplete="off">
        <div className="fields">
          <div className="sixteen wide field">
            <div className={classNames('ui icon input', {loading: isSearching})}>
              <input
                type="text"
                value={term}
                onChange={onChange}
                disabled={!props.todos.length && !term.trim()}
                placeholder="Search todo..."
              />

              <i
                className={classNames("icon link", {
                  search: !term,
                  remove: term,
                })}
                onClick={onIconClick}
              ></i>
            </div>
          </div>
        </div>
      </form>
    );
  
}

export default Searchbar;
