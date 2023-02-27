import Link from 'next/link';

const FirstPost = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">First Post</h2>
      <p><Link href="/">Back</Link></p>
    </div>
  );
};

export default FirstPost;
