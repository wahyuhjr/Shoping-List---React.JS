import React from 'react'
import PropTypes from 'prop-types'
import styles from './Todos.module.css'
import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'
import classnames from 'classnames'

const Todos = ({todos,onMinus,onPlus}) => {
    return (
        <div className={styles.todos}>
        {todos.map((todo, index, arr) => {
          return (
            <div key={index} 
            // className={`todo ${!(arr.length === index + 1) && ('todo-devider')}`}
            className={classnames(styles.todo, {
                [styles.todoDevider]: !(arr.length === index + 1)
            }) }
            >

            {todo.title}

              <div className={styles.todoIconWrapper}>
                <div className={styles.todoCount}>{todo.count}</div>

                <button onClick={() => onMinus(index)} className={styles.todoActionButton}>
                  <img src={minusIcon} alt="minus icon"/>
                </button>

                <button onClick={() => onPlus(index)} className={styles.todoActionButton}>
                  <img src={plusIcon} alt="plus icon"/>
                </button>

              </div>
            </div>
          )}
          )}
        </div>
        )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onMinus: PropTypes.func,
    onPlus: PropTypes.func
}

export default Todos