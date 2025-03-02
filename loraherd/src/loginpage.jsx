import { useState } from "react"; 
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const style = {
  logoText: {
    fontSize: "3rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #3DD68C, #2870BD)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    marginBottom: "2rem", // Augmente l'espace en dessous du titre
    display: "inline-block",
  },
  loginContainer: {
    backgroundColor:'#050505',
    width: "100vw",
    height: "100vh",
    display: "flex",
    position: "fixed", // Rend la page fixe
    top: 0,
    left: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    maginLeft:"110px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px", // Ajoute un bon espacement entre les champs
    width: "80%",
  },
  iconStyle: {
    backgroundColor: "#000",
    border: "2px solid #4BBB93",
    color: "#4BBB93",
    padding: "12px 40px",
    transform: 'translatex(100px)',
    borderRight: "6px solid #4BBB93",
    borderRadius: "10px ",
  },
  inputStyle: {
    padding: "12px",
    backgroundColor:"#000",
    width: "70%",
    maginLeft:"200px",
    color:"#fff",
    transform: 'translatex(80px)',
    
    fontSize: "18px",
    border: "2px solid #4BBB93",
    borderRadius: "8px",
    outline: "none",
  },
  loginButton: {
    width: "40%",
    backgroundColor:'#3DD68C',
    // background: "linear-gradient(to right, #3DD68C, #2870BD)",
    color: "#000",
    padding: "12px",
    borderRadius: "8px",
    textAlign: "center",
    marginTop: "20px",
    cursor: "pointer",
  },
  socialContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  signupText: {
    textAlign: "center",
    marginTop: "20px",
  },
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={style.loginContainer}>
      <h1 style={style.logoText}>Loraherb</h1>
      <h2 className="text-xl font-semibold text-center mb-6" style={{ color: "#fff" }}>
        Login to your account
      </h2>

      <form className="space-y-6" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Champ Email */}
        <div style={style.inputContainer}>
          <span style={style.iconStyle}><Mail size={18} /></span>
          <input
            type="email"
            placeholder="Email"
            style={style.inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Champ Mot de Passe */}
        <div style={style.inputContainer}>
          <span style={style.iconStyle}><Lock size={18} /></span>
          <input
            type="password"
            placeholder="Mot de passe"
            style={style.inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Lien mot de passe oublié */}
        <div className="text-right w-full text-center">
          <a href="#" className="hover:underline" style={{ color: "#3182ce" }}>
            Forget your password?
          </a>
        </div>

        {/* Bouton Login */}
        <button style={style.loginButton}>Login</button>
      </form>

      {/* Ligne de séparation */}
      <div className="flex items-center my-4" style={{ width: "80%" }}>
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-2 text-gray-500">Or login with</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Icônes réseaux sociaux */}
      <div style={style.socialContainer}>
        <div className="text-2xl"><FcGoogle /></div>
        <div className="text-2xl" style={{ color: "blue" }}><FaFacebook /></div>
        <div className="text-2xl" style={{ color: "blue" }}><FaTwitter /></div>
      </div>

      {/* Lien d'inscription */}


      <p style={{ ...style.signupText, color: "#fff", fontSize: "16px" }}>
  Don't have an account?{" "}
      
        <a href="signup" className="hover:underline" style={{ color: "#3182ce" }}>
          
          Sign up
        </a>
      </p>

    </div>
  );
}
