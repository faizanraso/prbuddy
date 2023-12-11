import CodeBlock from "../CodeBlock";

interface GeneratePageSectionProps {
  title: string;
  content: string;
  codeBlock: boolean;
  code?: string;
}

export default function GeneratePageSection({
  title,
  content,
  codeBlock,
  code,
}: GeneratePageSectionProps) {
  return (
    <div className="py-2.5">
      <h1 className="font-bold text-2xl text-gray-100 underline py-2.5">
        {title}
      </h1>
      <p className=" text-gray-300 py-2.5">{content}</p>

      {codeBlock ? (
        <div className="py-2.5">
          <CodeBlock code={code!} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
