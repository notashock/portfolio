const colorMap = {
  js: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-600 dark:text-white',
  react: 'bg-blue-200 text-blue-800 dark:bg-blue-600 dark:text-white',
  tailwind: 'bg-teal-200 text-teal-800 dark:bg-teal-600 dark:text-white',
  node: 'bg-green-200 text-green-800 dark:bg-green-600 dark:text-white',
  python: 'bg-purple-200 text-purple-800 dark:bg-purple-600 dark:text-white',
  // add more...
};

export default function SkillBadge({ name, color }) {
  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-medium ${colorMap[color] || 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'}`}
    >
      {name}
    </span>
  );
}
