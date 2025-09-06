import React from "react";
import ReactMarkdown from "react-markdown";

export default function ChatMessage({ type, message }) {
  const isUser = type === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] whitespace-pre-wrap break-words ${
          isUser
            ? "bg-primary-light dark:bg-primary-dark text-white rounded-lg rounded-tr-none px-4 py-2"
            : "text-heading-light dark:text-heading-dark px-4 py-2"
        }`}
      >
        {isUser ? (
          message
        ) : (
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => <p className="mb-2" {...props} />,
              a: ({ node, ...props }) => (
                <a
                  className="text-accent-light dark:text-accent-dark underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li className="ml-4 list-disc" {...props} />
              ),
              code: ({ node, inline, ...props }) =>
                inline ? (
                  <code
                    className="bg-muted-light dark:bg-muted-dark px-1 rounded text-sm"
                    {...props}
                  />
                ) : (
                  <pre className="bg-muted-light dark:bg-muted-dark text-sm p-3 rounded-lg overflow-x-auto">
                    <code {...props} />
                  </pre>
                ),
            }}
          >
            {message}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
