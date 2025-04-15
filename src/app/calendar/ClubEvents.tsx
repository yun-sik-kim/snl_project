import { useContext } from 'react';
import moment from 'moment';
import { DraggedEventContext } from './DraggedEventContext';
import { VEvent } from '../types/calendarType';

interface ClubEventProps {
  vEvent: VEvent;
}

const ClubEvent: React.FC<ClubEventProps> = ({ vEvent }) => {
  const { setDraggedEvent } = useContext(DraggedEventContext);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setDraggedEvent(vEvent);
    e.dataTransfer.setData('application/json', JSON.stringify(vEvent));
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        // width: '500px',
        // height: '240px',
        border: '1px solid black',
        padding: '10px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3>{vEvent.title}</h3>
      <p>Start: {moment(vEvent.start).format('MMMM D, YYYY, h:mm A')}</p>
      <p>End: {moment(vEvent.end).format('MMMM D, YYYY, h:mm A')}</p>
      {vEvent.allDay && <p>All Day: Yes</p>}
      {vEvent.resource?.location && <p>Location: {vEvent.resource.location}</p>}
      {vEvent.resource?.description && <p>Description: {vEvent.resource.description}</p>}
    </div>
  );
};

export default ClubEvent;