import Header from "~/components/Header";
import office from "~/img/office 2.jpg";

import Cover from "~/components/Cover";
import { Suspense } from "react";
import _ from "lodash";
import useCountries from "~/hooks/useCountries";

export default function About() {
  return (
    <>
      <Header />

      <main className={"about"}>
        <h1>About us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <img src={office} alt={"staff_at work"} />
      </main>
    </>
  );
}
