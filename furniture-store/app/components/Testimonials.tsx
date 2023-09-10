export default function Testimonials() {
  return (
    <>
      {/* Testimonials Section: Simple Multiple */}
      <div className="bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="text-center">
            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
              OUR CLIENTS
            </div>
            <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
              Here&apos;s what our satisfied clients are saying
            </h2>
          </div>
          {/* END Heading */}

          {/* Feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="px-6 pt-16 pb-6 md:px-12 md:pb-10 relative rounded-lg shadow-sm bg-white dark:text-gray-100 dark:bg-gray-800">
              <div className="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif dark:text-gray-700/75">“</div>
              <div className="relative">
                <blockquote>
                  <p className="font-medium text-lg leading-8 mb-5">
                    These are the most beautiful cabinets!! So well made. The contractor installing them said they’re some of the best he’s ever seen. Everyone that sees them wants to know where I bought them.
                  </p>
                  <footer className="flex items-center space-x-4">
                    <a href="#" className="flex-none rounded-full overflow-hidden w-16 h-16 transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110 dark:border-gray-800 dark:shadow-gray-900">
                      <img src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="#" className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                        Elsa King
                      </a>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Senior Client
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="px-6 pt-16 pb-6 md:px-12 md:pb-10 relative rounded-lg shadow-sm bg-white dark:text-gray-100 dark:bg-gray-800">
              <div className="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif dark:text-gray-700/75">“</div>
              <div className="relative">
                <blockquote>
                  <p className="font-medium text-lg leading-8 mb-5">
                    We carry Wellsford Cabinetry among several others for our kitchen design and remodel services. Wellsford has the best quality I have seen, with fair pricing and excellent, excellent customer service. They are my “go to” line.                    </p>
                  <footer className="flex items-center space-x-4">
                    <a href="#" className="flex-none rounded-full overflow-hidden w-16 h-16 transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110 dark:border-gray-800 dark:shadow-gray-900">
                      <img src="https://cdn.tailkit.com/media/placeholders/avatar-sibVwORYqs0-160x160.jpg" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="#" className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                        Alex Saunders
                      </a>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Fresh Designer
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            
          </div>
          {/* END Feedback */}
        </div>
      </div>
      {/* END Testimonials Section: Simple Multiple */}
    </>
  )
}