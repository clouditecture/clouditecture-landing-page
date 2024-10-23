
const Products = () => {        
    return (
    <div>
      <section className="pb-12 bgWhite sm:pb-16 lg:pb-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 maxW-7xl">
          <div className="relative py-12 overflow-hidden bg-indigo-600 rounded-xl sm:py-16 lg:py-20">
            <div className="absolute inset-0">
              <img className="object-contain object-right w-full h-full transform scale-125"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg" alt="" />
            </div>

            <div className="relative maxW-5xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="relative">
                <div className="absolute"></div>

                <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-16 xl:gap-x-20">
                  <div className="flex flex-col justify-between lg:col-span-3">
                    <div>
                      <h1 className="text-4xl font-bold textWhite sm:text-5xl">
                        <span className="relative inline">
                          <img className="absolute top-0 w-auto h-8 -right-8" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/design-element.svg" alt="" />
                          Our Products
                        </span>
                      </h1>
                      <p className="mt-6 text-base font-normal leading-7 textWhite text-opacity-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum
                        arcu.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="textLg font-bold textWhite">
                      Join the waitlist list ...
                    </p>
                    <form action="#" method="POST" className="mt-4 space-y-4">

                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <div className="">
                          <input type="email" name="email" id="email"
                            className="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 roundedLg focus:ring-gray-900 focus:border-gray-900"
                            placeholder="Email address" />
                        </div>
                      </div>

                      <div className="relative group">
                        <div
                          className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blurLg filter group-hover:opacity-100 group-hover:duration-200">
                        </div>

                        <button type="submit"
                          className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base sm:py-3.5 font-bold textWhite transition-all duration-200 bg-gray-900 roundedLg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-transparent">
                          Join
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}
export default Products;