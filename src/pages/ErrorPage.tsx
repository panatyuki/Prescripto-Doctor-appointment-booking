// Error page.

// Hook.
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-roboto">
        <span className="text-red-600">404</span> - Page Not Found
      </h1>
      <p className="text-2xl font-roboto">
        Sorry, the page you are looking for does not exist.
      </p>

      <br />

      <Link to="/" className="text-blue-600 underline">
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;

