const { loadGetInitialProps } = require("next/dist/next-server/lib/utils");

function Container(props) {
  return (
    <div className=" grid grid-cols-3 my-12 grid-flow-row gap-8 ">
      {props.children}
    </div>
  );
}

export default Container;
