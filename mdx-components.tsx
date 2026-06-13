import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-9 text-2xl font-black text-ink" {...props} />,
    h3: (props) => <h3 className="mt-6 text-xl font-black text-ink" {...props} />,
    p: (props) => <p className="mt-4 leading-8 text-moss" {...props} />,
    ul: (props) => <ul className="mt-4 list-disc pl-5 leading-8 text-moss" {...props} />,
    li: (props) => <li className="mt-1" {...props} />,
    a: (props) => <a className="font-bold text-clay underline underline-offset-4" {...props} />,
    ...components
  };
}
