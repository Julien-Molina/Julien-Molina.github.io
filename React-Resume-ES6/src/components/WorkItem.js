import React from 'react';
import moment from 'moment';

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).locale('fr').format('MMMM YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = moment(props.workItemData.endDate).locale('fr').format('MMMM YYYY');
        } else {
          enddate = 'Aujourd\'hui';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = props.workItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="workItem">
          <h3>{props.workItemData.position}, <span>{props.workItemData.company}</span></h3>
          <p className="workDates">{getWorkDates()}</p>
          <p>{props.workItemData.summary}</p>
          <ul>{getHighlights}</ul>
        </div>
    )
};

export default WorkItem;
