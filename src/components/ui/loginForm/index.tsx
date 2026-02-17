import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function LoginForm() {
  const styleForm =
    "p-2 rounded-2xl border-2 border-gray-300 w-80 outline-none focus:border-2 focus:border-gray-400";
const btnLoginGooleOrFacebook = 'py-2 w-40 rounded-2xl text-white flex justify-center items-center  gap-2 px-4 shadow-sm'

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <form className="py-2 flex gap-2 flex-col" action="">
          <h2 className="w-full border-b-2 border-b-gray-300 mb-10 py-2 text-lg">
            Efetuar login
          </h2>
          <label className="font-bold" htmlFor="email">E-mail</label>
          <input
            name="email"
            id="email"
            className={styleForm}
            type="email"
            placeholder="E-mail"
          />
          <label className="font-bold" htmlFor="password">Senha <span className="ml-28 text-sm font-normal"><a href="">Esqueceu sua senha?</a></span></label>
          <input
            className={styleForm}
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
          />
          <button className='mt-4 rounded-2xl w-80 p-2 bg-green-500 text-white 
          hover:bg-green-600 cursor-pointer transition-all duration-300 text-md font-bold shadow-sm'>
            Entrar
          </button>
          <span className="mx-auto text-gray-400">Ou</span>
          <div className="flex gap-2">
            <button className={`bg-red-500 ${btnLoginGooleOrFacebook}`}>{<FaGoogle />}Google</button>
            <button className={`bg-blue-500 ${btnLoginGooleOrFacebook}`}>{<FaFacebookF />}Facebook</button>
          </div>
          <a className="mt-2 font-normal " href="">Criar conta gratuitamente</a>
        </form>
      </div>
    </div>
  );
}
