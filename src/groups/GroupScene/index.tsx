interface Props {
  children: JSX.Element,
}

function GroupScene(props: Props) {
  return <div>{props.children}</div>;
}

export default GroupScene;
