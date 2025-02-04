const Articles = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="relative border border-gray-700 rounded-lg bg-gray-800/50 p-8 max-w-2xl w-full shadow-2xl overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shine" />
          <div className="absolute -top-1/2 left-1/2 w-1/3 h-1/3 bg-blue-500/10 rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Terminal box */}
            <div className="w-full bg-gray-900 rounded-lg p-6 font-mono border border-gray-700">
              <div className="flex items-center space-x-2 text-blue-400 mb-4">
                <span className="h-3 w-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm">articles.tsx</span>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="animate-typing">$ npm run generate-articles</p>
                <p className="text-yellow-400 animate-typing-delay-1">// Compiling my latest musings...</p>
                <p className="text-green-400 animate-typing-delay-2">✓ Articles successfully compiled</p>
                <p className="text-purple-400 animate-typing-delay-3">
                  &gt; Launching articles module {/* Fixed the > character */}
                </p>
              </div>
            </div>

            {/* Coming Soon text */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x">
                Articles Coming Soon
              </h2>
              <p className="text-gray-400">
                I'm busy writing and curating insightful articles.
                <br />
                Check back soon to read my latest thoughts!
              </p>
            </div>

            {/* Progress indicators */}
            <div className="flex space-x-4 items-center">
              <div className="h-2 w-24 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-1/3 animate-progress" />
              </div>
              <span className="text-blue-400 text-sm font-mono">LOADING... 67%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
