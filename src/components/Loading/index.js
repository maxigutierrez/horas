import { Spinner } from "@nextui-org/react";

const Loading = ({ height, fullscreen }) => {
  return (
    <div
      style={{
        height: height ? height : fullscreen ? "100vh" : "100%",
        width: fullscreen ? "100vw" : "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Spinner />
    </div>
  )
};

export default Loading;