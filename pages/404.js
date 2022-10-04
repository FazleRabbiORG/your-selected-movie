import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="errorpage">
      <h1>404 Error</h1>
      <h4>Page not found</h4>
      <h6>
        Redirect to <Link href="/"> homepage</Link>
      </h6>

      <style jsx>{`
        .errorpage {
          margin: 20px auto;
          text-align: center;
          margin-top: 100px;
          width: 50%;
          background-color: #f1f1f1;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
          padding: 20px;
        }
      `}</style>
    </div>
  );
}

export default Error;
