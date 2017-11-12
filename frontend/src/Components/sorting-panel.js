import React from 'react'
import {SortingMethods} from "../Actions/actions"


const SortingPanel = ({sortingOrder, onSortingVote, onSortingTimestamp}) => {

    return (
        <ul className='sorting-panel'>
            <button
                className={`btn sorting-panel__button ${sortingOrder === SortingMethods.VOTE_SCORE ? 'sorting-panel__button_active' : ''} `}
                onClick={onSortingVote}
            >
                By Votes
            </button>
            <button
                className={`btn sorting-panel__button ${sortingOrder === SortingMethods.TIMESTAMP ? 'sorting-panel__button_active' : ''} `}
                onClick={onSortingTimestamp}
            >
                By Time
            </button>
        </ul>
    )
};

export default SortingPanel
