import { Layout } from "./layout";

function App() {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-3">
        {Array(16)
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
    <div className="bg-white flex flex-col gap-2 p-3 shadow-md hover:shadow-xl transition-all duration-300">
      <img className="" src="https://picsum.photos/600/400" />
      <p className="text-lg font-semibold">This is an image description</p>
      <p>
        Nostrud occaecat laborum voluptate deserunt incididunt eiusmod enim in
        tempor anim do cillum minim.
      </p>
    </div>
  );
};
