export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50/80 to-gray-100/80 backdrop-blur-sm border-t border-gray-200/60 mt-8 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-lg p-1.5 shadow-lg">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Smart Slate</p>
              <p className="text-xs text-gray-500">Intelligent Scheduling</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Help
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms
            </a>
          </div>

          <div className="text-xs text-gray-500">
            © 2025 Smart Slate. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
