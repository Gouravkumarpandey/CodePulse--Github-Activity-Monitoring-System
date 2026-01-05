const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-github-canvas-inset text-white py-8 mt-auto border-t border-gray-700 dark:border-github-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">CodePulse</h3>
            <p className="text-gray-400 dark:text-github-text-secondary text-sm mt-1">
              GitHub Activity Monitoring System
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400 dark:text-github-text-secondary">
            <a href="#" className="hover:text-white dark:hover:text-github-text transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white dark:hover:text-github-text transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-white dark:hover:text-github-text transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-white dark:hover:text-github-text transition-colors">
              Privacy
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 dark:border-github-border text-center text-sm text-gray-400 dark:text-github-text-secondary">
          <p>&copy; {new Date().getFullYear()} CodePulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
