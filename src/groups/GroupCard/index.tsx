import './GroupCard.css';

interface Props {
  groupName: string,
  participantCount: number,
}

function GroupCard(props: Props) {
  return (
    <div className="GroupCard">
      <div className="GroupCard__title">{props.groupName}</div>
      <div>{props.participantCount} participants</div>
    </div>
  );
}

export default GroupCard;
