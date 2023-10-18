import Link from "next/link";

/**
 *
 * @param {{errorHeader: string, errorMsg: string, home: boolean, reset: () => void}} param0
 * @returns {React.ReactNode}
 */
export const ErrorComponent = ({
  errorHeader = "Something went wrong!",
  errorMsg = "",
  home = true,
  reset,
}) => (
  <div
    className="
    flex
    items-center
    justify-center
    w-screen h-screen
    bg-bgToolBar
    "
  >
    <div className="px-20 py-10 bg-white rounded-lg shadow-xl w-full h-full sm:max-w-3xl sm:max-h-96 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="mb-2 font-bold text-accent text-9xl">404</h1>

        <h6 className="mb-2 text-2xl font-bold text-center text-black md:text-3xl">
          <span className="text-red-500">Oops!</span> {errorHeader}
        </h6>

        <p className="mb-4 text-center text-gray-500 md:text-lg">{errorMsg}</p>

        <div className="flex items-center justify-between gap-8">
          {home ? (
            <Link
              href="/"
              title="Home"
              className="flex items-center gap-2 group/home"
            >
              Home
            </Link>
          ) : null}
          {!!reset ? (
            <span
              className="cursor-pointer flex items-center gap-2 group/reset"
              title="Try Again"
              onClick={reset}
            >
              Try Again
            </span>
          ) : null}
        </div>
      </div>
    </div>
  </div>
);
