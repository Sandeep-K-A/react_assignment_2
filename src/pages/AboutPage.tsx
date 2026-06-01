import type { FunctionComponent as FC } from "react";
import { Link } from "react-router-dom";
import { techStack, pages } from "../data/data";

const AboutPage: FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
      >
        {" "}
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">About This App</h1>
      <p className="text-gray-500 mb-10">
        Built as a React Router assignment using TypeScript and Tailwind CSS.
      </p>

      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-semibold text-gray-900 mb-2">🎯 Purpose</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            This application demonstrates multi-page routing in React using
            react-router-dom v6. It covers nested routes, parameterized URLs,
            active link highlighting, and a responsive navigation bar — all
            built with functional components and TypeScript.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-semibold text-gray-900 mb-3">🛠 Tech Stack</h2>
          <div className="grid grid-cols-2 gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-semibold text-gray-900 mb-3">📄 Pages</h2>
          <ul className="text-sm text-gray-500 space-y-2">
            {pages.map((page) => (
              <li key={page.route} className="flex items-start gap-2">
                <code className="bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded text-xs shrink-0">
                  {page.route}
                </code>
                <span>{page.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
