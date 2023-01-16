import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, signIn } from "@/store";
import type { APICall, User } from "@/types";

let redirectTimeoutId: NodeJS.Timeout;

const Prijava = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [formResponse, setFormResponse] = useState<APICall<User>>({
    isSuccess: false,
    errorMessages: [],
    statusCode: 0,
  });
  const isLogin = location.pathname == "/prijava";
  const formAction =
    "https://www.fulek.com/data/api/user/" + (isLogin ? "login" : "register");
  useEffect(() => () => clearTimeout(redirectTimeoutId), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response: APICall<User> = await fetch(formAction, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
    if (!response.isSuccess) {
      setFormResponse(response);
      return setIsSubmitting(false);
    }
    if (!response.data) {
      setFormResponse({ ...response, isSuccess: false });
      navigate("/prijava");
      return setIsSubmitting(false);
    }
    setFormResponse(response);
    dispatch(signIn(response.data));
    redirectTimeoutId = setTimeout(() => navigate("/"), 3000);
  };

  return (
    <main
      className="m-auto w-full max-w-lg animate-reset p-3 opacity-0"
      key={isLogin + ""}
    >
      <div className="mb-4 text-lg font-bold">
        {isLogin ? "PRIJAVA" : "REGISTRACIJA"} KORISNIKA
      </div>
      <form
        method="post"
        spellCheck="false"
        autoComplete="true"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-bold text-gray-900"
          >
            Korisničko ime:
          </label>
          <input
            type="email"
            name="username"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
            title="Ovo polje je obavezno!"
            placeholder="E-mail adresa..."
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Neispravan email!"
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            required
            onChange={(e) =>
              setForm({ ...form, username: e.target.value.trim() })
            }
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-bold text-gray-900"
          >
            Lozinka:
          </label>
          <input
            type="password"
            name="password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
            title="Ovo polje je obavezno!"
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Ispunite ovo polje!"
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className={`${
            isSubmitting ? " !border-neutral-300 !bg-white text-black" : ""
          } mb-2 w-full rounded-md border-4 border-transparent bg-neutral-700 px-4 py-2 text-white transition-all duration-150 hover:bg-neutral-600`}
          disabled={isSubmitting}
        >
          {isLogin ? "Prijavi" : "Registriraj"} se
        </button>
        {formResponse.isSuccess && (
          <div className="text-red-500">
            Uspješna prijava :) Na početnu stranicu za 3,2,1...
          </div>
        )}
        {!!formResponse.errorMessages.length && (
          <div
            className="text-red-500"
            dangerouslySetInnerHTML={{
              __html: formResponse.errorMessages.join("<br />"),
            }}
          ></div>
        )}
        {isLogin && (
          <div className="pt-3">
            Nemaš račun?&nbsp;
            <Link to="/registracija" className="font-bold text-blue-500">
              Registriraj se
            </Link>
          </div>
        )}
      </form>
    </main>
  );
};

export default Prijava;
