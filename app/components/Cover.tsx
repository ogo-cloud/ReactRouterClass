import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cover() {
  return (
    <>
      <section className={"cover"}>
        <div>
          <h1>React</h1>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año.
          </p>
          <div>
            <a href="#" className={"docs"}>
              <span> Documentation</span>
              <span>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
            </a>

            <a href="#" className={"ex"}>
              <span>Explore</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
