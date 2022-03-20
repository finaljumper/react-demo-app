import './GroupScene.css';
import GroupCard from "../GroupCard";

function GroupScene() {
  return (
    <div className="GroupScene">
      <GroupCard groupName="Moscow NY 2022" participantCount={6} />
      <GroupCard groupName="Sheregesh march 2022" participantCount={5} />
      <GroupCard groupName="Moscow march 2022" participantCount={4} />
      <GroupCard groupName="New group with a very very long name" participantCount={999} />
      <GroupCard groupName="Short name" participantCount={1} />
    </div>
  );
}

export default GroupScene;
