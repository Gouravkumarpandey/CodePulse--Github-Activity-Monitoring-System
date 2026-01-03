import React from 'react';

const CodePulseHomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900">CodePulse</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</a>
                <a href="#documentation" className="text-gray-700 hover:text-blue-600">Documentation</a>
                <a href="https://github.com/Gouravkumarpandey/CodePulse" className="text-gray-700 hover:text-blue-600">GitHub</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#login" className="text-gray-700 hover:text-blue-600">Log in</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Real-Time Hackathon Monitoring with GitHub Integration
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ensure fair and continuous development during hackathons by tracking repository push activity in real-time. Monitor compliance, detect violations, and maintain transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700">
                  Get Started
                </button>
                <a href="https://github.com/Gouravkumarpandey/CodePulse" target="_blank" rel="noopener noreferrer">
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-50">
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://dam-cdn.atl.orangelogic.com/AssetLink/xgj00qolw838180qbgn0pnag8ilu72po/fl_keep_metadata/Hero_Image.webp"
                alt="CodePulse Dashboard"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Icons Section */}
      <section className="py-16 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-600">
                Track GitHub push events in real-time using webhooks. Monitor team activity continuously without interfering with participants' workflows.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rule-Based Compliance</h3>
              <p className="text-gray-600">
                Automated compliance engine evaluates development activity against predefined hackathon rules and detects violations.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Dashboard</h3>
              <p className="text-gray-600">
                Comprehensive organizer dashboard displaying team timelines, activity frequency, compliance status, and violation reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Context Section */}
      <section className="py-20 bg-gray-50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How CodePulse Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              CodePulse uses GitHub as the single source of truth, capturing real-time push events through webhooks to ensure fair hackathon participation.
            </p>
          </div>
          {/* Video Section */}
          <div className="max-w-5xl mx-auto">
            <video
              className="w-full rounded-lg shadow-2xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://dam-cdn.atl.orangelogic.com/AssetLink/f30fkxyc8plj5qlqr61qcu671g46etr8.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Built on GitHub Webhooks</h2>
              <p className="text-xl mb-6">
                CodePulse captures server-side push events from GitHub repositories, processes commit metadata, and constructs chronological timelines for every participating team. The system uses server-generated timestamps to guarantee fairness and resistance to manipulation.
              </p>
              <a href="https://github.com/Gouravkumarpandey/CodePulse" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
                  View Documentation
                </button>
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src="https://dam-cdn.atl.orangelogic.com/AssetLink/30hl53aisf7f43b46mmxftq1054o47f1/fl_keep_metadata/Migration_Image_mobile.svg"
                alt="Architecture illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Arrows - Left */}
        <div className="absolute left-0 top-1/4 hidden lg:block">
          <img
            src="https://dam-cdn.atl.orangelogic.com/AssetLink/nav783c220b1473w533cqlp4op182464/fl_keep_metadata/AI_arrows_Left.svg"
            alt="Decorative arrows"
            className="w-32 opacity-30"
          />
        </div>
        {/* Decorative Arrows - Right */}
        <div className="absolute right-0 top-1/3 hidden lg:block">
          <img
            src="https://dam-cdn.atl.orangelogic.com/AssetLink/ywfcwd72l6l10kmktdi661s208ky7873/fl_keep_metadata/AI_arrows_Right.svg"
            alt="Decorative arrows"
            className="w-32 opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by Hackathon Organizers
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </div>
            <blockquote className="text-center">
              <p className="text-xl text-gray-700 mb-6">
                "CodePulse has revolutionized how we monitor hackathons. The real-time tracking and automated compliance checks ensure fairness while maintaining the integrity of our events."
              </p>
              <footer className="text-sm font-semibold text-gray-900">
                HACKATHON ORGANIZING COMMITTEE
                <div className="text-gray-600 mt-1">Open Source Community</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Platform AI Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden" id="documentation">
        {/* Decorative Arrows - Right */}
        <div className="absolute right-0 top-1/4 hidden lg:block">
          <img
            src="https://dam-cdn.atl.orangelogic.com/AssetLink/ywfcwd72l6l10kmktdi661s208ky7873/fl_keep_metadata/AI_arrows_Right.svg"
            alt="Decorative arrows"
            className="w-40 opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features of CodePulse
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive monitoring system designed to ensure fair hackathon participation with real-time insights and automated compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub Webhooks</h3>
              <p className="text-gray-600 mb-4">
                Secure webhook handling captures every push event from participant repositories in real-time, ensuring no activity goes untracked.
              </p>
              <a href="https://github.com/Gouravkumarpandey/CodePulse" className="text-blue-600 hover:underline">Learn more →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline Visualization</h3>
              <p className="text-gray-600 mb-4">
                Chronological development timelines for every team show commit activity, push frequency, and development patterns throughout the hackathon.
              </p>
              <a href="https://github.com/Gouravkumarpandey/CodePulse" className="text-blue-600 hover:underline">View demo →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Violation Detection</h3>
              <p className="text-gray-600 mb-4">
                Automated detection of rule violations including excessive inactivity, irregular patterns, and non-compliance with hackathon guidelines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Organizer Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive admin interface for monitoring all teams, viewing activity summaries, and generating compliance reports for judges.
              </p>
              <a href="https://github.com/Gouravkumarpandey/CodePulse" className="text-blue-600 hover:underline">Explore features →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://dam-cdn.atl.orangelogic.com/AssetLink/ae1ypvckww555m13t678516mj6n2f0i4/fl_keep_metadata/BB_Security_Screen1.webp"
                alt="Backend architecture"
                className="rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Backend Infrastructure</h3>
              <p className="text-gray-600">
                Built with Node.js and Express for secure webhook handling, MongoDB for data storage, and a rule-based analysis engine for compliance monitoring.
              </p>
            </div>
            <div>
              <img
                src="https://dam-cdn.atl.orangelogic.com/AssetLink/utk730q82b8m48q508ngyu67q0xhu40r/fl_keep_metadata/BB_Security_Screen3.webp"
                alt="Frontend dashboard"
                className="rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Frontend Dashboard</h3>
              <p className="text-gray-600">
                React-based user interface with real-time updates, interactive timeline charts, and comprehensive team analytics for organizers and judges.
              </p>
            </div>
            <div>
              <img
                src="https://dam-cdn.atl.orangelogic.com/AssetLink/1343mcn05en344ra4458365me735q151/fl_keep_metadata/BB_Security_Screen4.webp"
                alt="GitHub integration"
                className="rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">GitHub Integration</h3>
              <p className="text-gray-600">
                Seamless GitHub API integration for webhook configuration, repository monitoring, and real-time event processing with server-side timestamp validation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Data Security & Privacy</h3>
              <p className="text-gray-600">
                Secure data handling with encrypted storage, authentication middleware, and role-based access control for organizers and administrators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Source & Community Driven
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              CodePulse is an open-source project licensed under GPL-3.0. Contributions, feature requests, and feedback are welcome from the community.
            </p>
            <a href="https://github.com/Gouravkumarpandey/CodePulse" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg font-semibold">
              View on GitHub →
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">GPL-3.0</div>
                <div className="text-sm text-gray-600">License</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">Node.js</div>
                <div className="text-sm text-gray-600">Backend</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">React</div>
                <div className="text-sm text-gray-600">Frontend</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">MongoDB</div>
                <div className="text-sm text-gray-600">Database</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">GitHub</div>
                <div className="text-sm text-gray-600">API</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Deliver high quality software. Fast.</h2>
          <p className="text-xl mb-8">
            Measure and improve productivity, quality, and speed with the AI-native SDLC for
            every software team.
          </p>
          <a href="https://github.com/Gouravkumarpandey/CodePulse" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100">
              Get Started on GitHub
            </button>
          </a>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Getting Started</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <img
                  src="https://dam-cdn.atl.orangelogic.com/AssetLink/2s327d2e277p0v80gac0rmy0ut782pyr/fl_keep_metadata/Card_spot_cloud.svg"
                  alt="Cloud illustration"
                  className="h-16"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Migrate to Bitbucket cloud</h3>
              <p className="text-gray-600 mb-4">
                Our free app moves your code and users from Bitbucket Server or Data Center to Cloud.
              </p>
              <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <img
                  src="https://dam-cdn.atl.orangelogic.com/AssetLink/t776msv54t0420s48eim2dg50156rwt8/fl_keep_metadata/Card_spot_build.svg"
                  alt="Build icon"
                  className="h-16"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scale CI/CD with Bitbucket Pipelines</h3>
              <p className="text-gray-600 mb-4">
                Learn how Atlassian builds secure CI/CD workflows to support 10,000 people using
                over 1 billion build minutes a month.
              </p>
              <a href="#" className="text-blue-600 hover:underline">Watch the webinar →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <img
                  src="https://dam-cdn.atl.orangelogic.com/AssetLink/outt0y3xyd48hc0v334hv4nqka8l4qvk/fl_keep_metadata/Card_logo_Gartner.svg"
                  alt="Gartner logo"
                  className="h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3X a DevOps Leader</h3>
              <p className="text-gray-600 mb-4">
                For the third year in a row, Atlassian was named a Leader in the 2025 Gartner®
                Magic Quadrant ™ for DevOps Platforms.
              </p>
              <a href="#" className="text-blue-600 hover:underline">See the report →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <img
                  src="https://dam-cdn.atl.orangelogic.com/AssetLink/np0j8d765ebc4a778s3tdr6bc7avc301/fl_keep_metadata/logo-light_Bitbucket_mark-tile_inverse_RGB.svg"
                  alt="Bitbucket logo"
                  className="h-16"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">New features on the horizon</h3>
              <p className="text-gray-600 mb-4">
                Learn more about what we've recently shipped and what we're building next for
                your team.
              </p>
              <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Start Using CodePulse</h2>
          <a href="https://github.com/Gouravkumarpandey/CodePulse" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100">
              Get it Free on GitHub
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-semibold mb-4">CodePulse</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/Gouravkumarpandey/CodePulse" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub Repository</a></li>
                <li><a href="https://github.com/Gouravkumarpandey/CodePulse#readme" target="_blank" rel="noopener noreferrer" className="hover:text-white">Documentation</a></li>
                <li><a href="https://github.com/Gouravkumarpandey/CodePulse/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white">Issues</a></li>
                <li><a href="https://github.com/Gouravkumarpandey/CodePulse#license" target="_blank" rel="noopener noreferrer" className="hover:text-white">License (GPL-3.0)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/Gouravkumarpandey/CodePulse#getting-started" target="_blank" rel="noopener noreferrer" className="hover:text-white">Setup Guide</a></li>
                <li><a href="https://github.com/Gouravkumarpandey/CodePulse#readme" target="_blank" rel="noopener noreferrer" className="hover:text-white">Documentation</a></li>
                <li><a href="https://github.com/Gouravkumarpandey/CodePulse#features" target="_blank" rel="noopener noreferrer" className="hover:text-white">Features</a></li>
                <li><a href="https://github.com/Gouravkumarpandey/CodePulse#architecture-statement" target="_blank" rel="noopener noreferrer" className="hover:text-white">Architecture</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-4">Connect with us</h4>
              <p className="mb-4">Follow the project for updates:</p>
              <div className="flex gap-2 mb-4">
                <a href="https://github.com/Gouravkumarpandey/CodePulse" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Star on GitHub
                </a>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/Gouravkumarpandey/CodePulse" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="https://github.com/Gouravkumarpandey/CodePulse#license" target="_blank" rel="noopener noreferrer" className="hover:text-white">GPL-3.0 License</a>
              <a href="https://github.com/Gouravkumarpandey/CodePulse" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
              <a href="https://github.com/Gouravkumarpandey/CodePulse/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white">Report Issues</a>
            </div>
            <p className="text-sm">© 2026 CodePulse - Open Source Project</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodePulseHomePage;