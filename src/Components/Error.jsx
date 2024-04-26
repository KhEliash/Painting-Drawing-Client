 
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/404.jpg";
import { Helmet } from "react-helmet";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="text-center mt-3 space-y-3">
      <Helmet>
        <title>Error - PaintingDrawing</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link>
        <button className="btn bg-gray-900 text-white hover:text-black">
          Go Home
        </button>
      </Link>
      <img src={img} alt="" className="w-full h-[500px]" />
    </div>
  );
};

export default Error;