import Header from "~/components/Header";
import notfound from "~/img/notfound.png";
import TypeIt from "typeit-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={"not-found"}>
        <img src={notfound} alt={"animated_404_image"} />
        <p>
          <TypeIt as={"b"} options={{ waitUntilVisible: true, speed: 10 }}>
            {" "}
            <b>Opps!!,Take a long deep breath...</b>
          </TypeIt>
        </p>
      </main>
    </>
  );
}
