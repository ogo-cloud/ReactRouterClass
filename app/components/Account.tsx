import Header from "~/components/Header";
import {
  type BaseSyntheticEvent,
  type FormEvent,
  type FormEventHandler,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faClose,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { z } from "zod";
import { Form } from "react-router";
import type { Route } from "../+types/root";
import useCountries from "~/hooks/useCountries";
import _ from "lodash";
import PhoneInput from "react-phone-number-input/input";
import type { CountryCode } from "libphonenumber-js";

type FormType = "signup" | "login";

class formType {}

export default function Account({
  formType = "login",
}: {
  formType?: formType;
}) {
  return (
    <>
      <Header />
      <main>{formType === "signup" ? <SignUp /> : <Login />}</main>
    </>
  );
}

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [show, setshow] = useState(false);
  const handleChange = (ev: BaseSyntheticEvent) => {
    setData((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  return (
    <form method={"post"} className={"form"}>
      <div>
        <h1>Log into your account</h1>
        <span>Get your own dashboard</span>
      </div>
      <div>
        <label htmlFor={"email"}>Email</label>
        <input
          type={"email"}
          name={"email"}
          value={data.email}
          id={"email"}
          autoFocus
          required
          onInput={handleChange}
        />
      </div>

      <div>
        <label htmlFor={"password"}>Password</label>
        <input
          type={"password"}
          name={"password"}
          value={data.password}
          id={"password"}
          required
          onInput={handleChange}
        />

        <button type={"button"} onClick={() => setshow(!show)}>
          <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
        </button>
      </div>
      <button>Submit</button>
    </form>
  );
}

const Data = z
  .object({
    name: z
      .string({ required_error: "Full name required" })
      .trim()
      .nonempty({ message: "Provide full name" }),
    email: z
      .string({
        required_error: "Email required",
      })
      .trim()
      .email({ message: "Invalid email" })
      .nonempty({ message: "Provide an email" }),
    password: z
      .string({ required_error: "Password required" })
      .trim()
      .nonempty({ message: "Enter your password" })
      .min(8, { message: "Minimum 8 characters!" }),

    repassword: z
      .string({ required_error: "Retype password" })
      .trim()
      .nonempty({ message: "Retype password" })
      .min(8, { message: "Minimum 8 characters!" }),
    phone: z
      .string({ required_error: "Phone number required" })
      .trim()
      .nonempty({ message: "Provide a phone number" }),
  })
  .required({
    name: true,
    email: true,
    password: true,
    repassword: true,
    phone: true,
  });

class formEventHandler<T> {}

class Country {
  phonecode: any;
  icon: string | undefined;
  iso2: any;
}

function SignUp() {
  const [data, setData] = useState<z.infer<typeof Data>>({
    email: "",
    password: "",
    repassword: "",
    name: "",
    phone: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState({ open: false, msg: "" });
  const countries = useCountries();
  const [code, setCode] = useState<Country>(countries[0]);
  const [open, setOpen] = useState(false);
  const sortedCountry = useMemo(
    () => countries.sort((a, b) => (a.name < b.name ? -1 : 1)),
    [countries],
  );

  const handleInput = (ev: BaseSyntheticEvent) => {
    setData((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const submitData: FormEventHandler<HTMLFormElement> = (
    ev: FormEvent<HTMLFormElement>,
  ) => {
    ev.preventDefault();
    const parsedData = Data.safeParse({ ...data });
    if (!parsedData.success) {
      console.dir(parsedData.error);
    } else {
      const tel = parsedData.data.phone;
      const startsWithZero = _.startsWith(tel, "0");
      const removeZero = _.slice(tel, 1).join("");

      console.log({
        ...parsedData,
        phone: startsWithZero
          ? `(${code.phonecode})` + removeZero
          : `(${code.phonecode})` + tel,
      });
      console.log("All successfully registered");
    }
  };

  useEffect(() => {
    setCode(sortedCountry[0]);
  }, [sortedCountry]);

  return (
    <form method={"post"} onSubmit={submitData} className={"form"}>
      <div>
        <h1>Create an account</h1>
        <span>Get your own dashboard</span>
      </div>
      <div>
        <label htmlFor={"name"}>Full Name</label>
        <input
          type={"text"}
          name={"name"}
          id={"name"}
          value={data.name}
          autoFocus
          required
          onInput={handleInput}
        />
      </div>
      <div>
        <label htmlFor={"email"}>Email</label>
        <input
          type={"email"}
          name={"email"}
          id={"email"}
          value={data.email}
          required
          onInput={handleInput}
        />
      </div>
      <div className={"phone"}>
        <label htmlFor={"phone"}>Phone number</label>
        <button type={"button"} onClick={() => setOpen(!open)}>
          <img src={code.icon} alt={countries[0].iso2} />
          <span>+{code.phonecode}</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <div>
          <PhoneInput
            placeholder="Enter phone number"
            country={code.iso2 as any}
            international
            smartCaret
            useNationalFormatForDefaultCountryValue
            required
            name="phone"
            id="phone"
            value={data.phone}
            onChange={(tel) => {
              setData((prevState) => ({
                ...prevState,
                phone: tel ?? "",
              }));
            }}
          />
        </div>
      </div>
      <div>
        <label htmlFor={"password"}>Password</label>
        <input
          type={"password"}
          name={"password"}
          id={"password"}
          value={data.password}
          required
          onInput={handleInput}
        />
        <button type={"button"} onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
        </button>
      </div>
      <div>
        <label htmlFor={"Retype password"}>Retype Password</label>
        <input
          type={"password"}
          name={"repassword"}
          id={"repassword"}
          value={data.repassword}
          required
          onInput={handleInput}
        />
        <button type={"button"} onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
        </button>
      </div>
      <button>Submit</button>
      {open && (
        <div id={"countries"}>
          <h2>
            Choose options
            <button type={"button"} onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </h2>
          <div className={"country"}>
            {_.map(sortedCountry, (country, key) => (
              <button
                className={country == code ? "selected" : undefined}
                type={"button"}
                key={key}
                onClick={() => {
                  setCode(country);
                  setOpen(false);
                }}
              >
                <img src={country.icon} alt={country.iso2} />
                <b>{country.name}</b>
                <span className={"code"}>(+{country.phonecode})</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </form>
  );
}
