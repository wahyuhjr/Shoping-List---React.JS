import React from 'react'
import PropTypes from 'prop-types'
import styles from './Info.module.css'

const Info = ({todosLength, totalCount, onDelete}) => {
    return (
        <div className={styles.info}>
            <div className="info-total">
                <p className="">{`Total List : ${todosLength}`}</p>
            </div>

            <div className={styles.infoTotal}>
                 <p className="">{`Total Count : ${totalCount}`}</p>
            </div>

            <button onClick={onDelete} className={styles.deleteAllButton}>
            Delete all list
            </button>
        </div>
    )
}

Info.propTypes = {
    todosLength: PropTypes.number,
    totalCount: PropTypes.func,
    onDelete: PropTypes.func
}

export default Info