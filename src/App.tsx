import { Layout } from "./layout";

function App() {
  return (
    <Layout className="">
      <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array(4)
          .fill(0)
          .map(() => {
            return <ImageCard />;
          })}
      </div>
    </Layout>
  );
}

export default App;

const ImageCard = () => {
  return (
    <div className="flex flex-col gap-3 rounded bg-white p-3">
      <img className="" src="https://picsum.photos/600/400" />
      <p className="text-lg font-semibold">This is an image description</p>
      <p className="text-sm font-light">
        Nostrud occaecat laborum voluptate deserunt incididunt eiusmod enim in
        tempor anim do cillum minim.
      </p>
      <button className="m-auto w-fit rounded border border-blue-400 px-3 py-1 text-lg text-blue-600 transition-all duration-150 hover:bg-blue-100">
        Submit
      </button>
    </div>
  );
};
