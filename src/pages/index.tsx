import { trpc } from '../utils/trpc';


export default function Home() {
  const hello = trpc.user.list.useQuery();
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{hello.data}</p>
    </div>
  );
}
