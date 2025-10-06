import { useQuery } from "@tanstack/react-query";
import { Layout } from "./layout";
import { client } from "./client";

function App() {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await client.get<User[]>("/users");

      return res.data;
    },
  });

  if (usersQuery.isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <Layout className="">
      <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {usersQuery.data!.map((u) => {
          return <ImageCard user={u} />;
        })}
      </div>
    </Layout>
  );
}

export default App;

const ImageCard = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col gap-3 rounded bg-white p-3">
      <img className="" src="https://picsum.photos/600/400" />
      <p className="text-lg font-semibold">{user.id}</p>
      <p className="text-sm font-light">
        {user.firstName} {user.lastName}
      </p>
      <button className="m-auto w-fit rounded border border-blue-400 px-3 py-1 text-lg text-blue-600 transition-all duration-150 hover:bg-blue-100">
        Submit
      </button>
    </div>
  );
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
};
