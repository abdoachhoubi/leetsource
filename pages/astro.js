import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Router } from "next/router";

const Astro = () => {
  const session = useSession();
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    try {
      fetch("http://localhost:5000/admin?login=aachhoub")
        .then((res) => {
          if (res.status === 401) router.push("/404");
          return res.json();
        })
        .then((data) => {
          if (data === "UNAUTHORIZED") {
            router.push("/404");
          } else if (data === "AUTHORIZED") setAuth(true);
        });
    } catch (error) {
      router.push("/404");
    }
  }, []);

  return (
    auth && (
      <div>
        <h1>Hello</h1>
      </div>
    )
  );
};

export default Astro;
