export default function Hamburger({onClick}){
    return (
        <div className="md:hidden flex items-center">
          <button
            onClick={onClick}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
    )
}
