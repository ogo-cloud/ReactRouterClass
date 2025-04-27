import type { Route } from "./+types/home";
import Header from "~/components/Header";
import Cover from "~/components/Cover";
import Banner from "~/components/Banner";
import { Suspense, useEffect } from "react";
import useCountries from "~/hooks/useCountries";
import _ from "lodash";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const countries = useCountries();
  useEffect(() => {
    console.log(countries);
  }, []);
  return (
    <>
      <Header />
      <Cover />
      <Banner />
    </>
  );
}
