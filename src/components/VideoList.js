import Video from "./Video";

export default function VideoList(props) {
  return props.list.map(item => <Video key={Math.random(1000000)} url={item.url} date={item.date} />);
}