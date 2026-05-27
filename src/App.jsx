import Card from "./components/Card";
import Wrap from "./components/Wrap";


function App() {
  return (
    <>
      <h1>Интернет магазин</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis fuga perspiciatis, quo illo saepe odio tempore. Harum, porro praesentium fugit ipsam id nihil voluptatem reiciendis quasi in suscipit aperiam nostrum?
      </p>
      <hr />
      <Wrap>
        <Card
          img="/car2.png"
          title="mazda"
          text="краткое описание нашего товара"
          price={1111}
        />
        <Card
          img="/car1.png"
          title="opel"
          text="краткое описание нашего товара"
          price={1111}
        />
        <Card
          img="/car1.png"
          title="opel"
          text="краткое описание нашего товара"
          price={1111}
        />
      </Wrap>
    </>
  );
}

export default App;