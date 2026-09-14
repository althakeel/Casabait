"use client";

export function PropertySearchBar() {
  return (
    <form className="mx-auto mt-8 max-w-4xl rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:p-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="search-location" className="mb-1 block text-xs font-medium text-gray-600">
            Location
          </label>
          <select id="search-location" className="input-field text-sm">
            <option value="">All Areas</option>
            <option value="jvt">Jumeirah Village Triangle</option>
            <option value="jvc">Jumeirah Village Circle</option>
            <option value="al-furjan">Al Furjan</option>
            <option value="impz">Dubai Production City</option>
            <option value="motor-city">Motor City</option>
            <option value="dubailand">Dubailand</option>
          </select>
        </div>
        <div>
          <label htmlFor="search-type" className="mb-1 block text-xs font-medium text-gray-600">
            Property Type
          </label>
          <select id="search-type" className="input-field text-sm">
            <option value="">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="townhouse">Townhouse</option>
            <option value="studio">Studio</option>
          </select>
        </div>
        <div>
          <label htmlFor="search-budget" className="mb-1 block text-xs font-medium text-gray-600">
            Budget
          </label>
          <select id="search-budget" className="input-field text-sm">
            <option value="">Any Budget</option>
            <option value="0-500000">Up to AED 500K</option>
            <option value="500000-1000000">AED 500K – 1M</option>
            <option value="1000000-2000000">AED 1M – 2M</option>
            <option value="2000000+">AED 2M+</option>
          </select>
        </div>
        <div className="flex items-end">
          <button type="submit" className="btn-primary w-full text-sm">
            Search Properties
          </button>
        </div>
      </div>
    </form>
  );
}
