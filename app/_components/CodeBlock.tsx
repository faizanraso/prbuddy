import CopyIcon from "./icons/CopyIcon";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <pre className="text-white text-sm p-4">{code}</pre>
      <button className="absolute top-0 right-0 m-4">
        <CopyIcon className="text-white" />
      </button>
    </div>
  );
}
