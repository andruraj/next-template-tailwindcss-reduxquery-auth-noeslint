export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <div className="py-12 px-14 shadow-xl flex flex-col gap-12">
        <div className="text-4xl font-semibold">Next JS App Template</div>
        <div className="flex flex-col items-start justify-center gap-4">
          <span className="text-lg font-semibold">
            The following features are included:
          </span>

          <ul className="flex flex-col gap-2">
            <li>Tailwind CSS</li>
            <li>ES Lint Removed</li>
            <li>redux toolkit with RTX Query</li>
            <li>Auth validation with Cookies</li>
            <li>Some basic utility functions</li>
            <li>Some basic components</li>
            <li>Default Error, NotFound, Unauthorized pages</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
