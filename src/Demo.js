import './Demo.css';
export default function Demo(props) {
  return (
    <>
      <div className="box">
        <div className="box2">
          <h1>Hello {props.name}</h1>
        </div>
      </div>
    </>
  );
}
