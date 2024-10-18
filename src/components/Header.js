import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="C:\Users\Admin\OneDrive\Documents\VSCode Practice\Practice\MERN\Projects\Sapien\sapien\src\sapien.jpg" alt="Sapien" className="h-8 w-auto" />
          <span className="ml-2 text-xl font-semibold text-gray-900">Sapien</span>
        </Link>
        <nav>
          <input type="text" placeholder="Search" className="px-3 py-2 border rounded-md" />
        </nav>
      </div>
    </header>
  );
}

export default Header;