import { serverSideFunction } from '@/utils/server-utils';

export default function ServerRoute() {
  console.log('server route rendered');

  const result = serverSideFunction();
  return (
    <>
      <div>ServerRoute</div>
      <p>{result}</p>
    </>
  );
}
