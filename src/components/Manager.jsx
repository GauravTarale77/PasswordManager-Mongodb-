import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


function Manager() {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [PasswordArray, setPasswordArray] = useState([])

  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    setPasswordArray(passwords)

  }

  useEffect(() => {
    getPasswords()

  }, [])

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast('Copied to clipboard!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }).catch(err => {
      toast.error("Failed to copy", {
        position: "top-right",
        autoClose: 3000,
      });
    });
  };




  const showPassword = () => {
    const isPasswordVisible = passwordRef.current.type === "text";
    passwordRef.current.type = isPasswordVisible ? "password" : "text";
    ref.current.src = isPasswordVisible ? "icons/eye.png" : "icons/eye-crossed.png";
  };


  const savePassword = async () => {
    if (!form.site || !form.username || !form.password) {
      alert("Please fill out all fields");
      return;
    }

    const id = form.id || uuidv4();
    const newPassword = { ...form, id };
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: form.id })
    });
    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPassword)
    });
    await getPasswords();


    // localStorage.setItem("passwords", JSON.stringify(newArray));
    setform({ site: "", username: "", password: "" });
    toast('Password saved', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  };

  const deletePassword = async (id) => {
    if (confirm("Do you really want to delete this password?")) {

      setPasswordArray(PasswordArray.filter(item => item.id !== id));
      // localStorage.setItem("passwords", JSON.stringify(newArray));
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });

      toast('Password Deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };


  const editPassword = (id) => {
    const selected = PasswordArray.find(i => i.id === id);
    setform(selected);
  };


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };




  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="absolute inset-0 -z-10 min-h-screen w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <div className="p-2 md:mycontainer min-h-[83.3vh]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>

        <p className="text-green-900 text-lg text-center">Your own Password Manager</p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name='site'
            id="site"
          />

          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name='username'
              id="username"
            />
            <div className="relative w-full">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="password"
                name='password'
                id="password"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="eye" />
              </span>
            </div>
          </div>

          <button onClick={savePassword} className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900">
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
              style={{ width: "26px", height: "26px" }}
            ></lord-icon>
            Save Password
          </button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {PasswordArray.length === 0 && <div> No Password to show </div>}
          {PasswordArray.length != 0 &&
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className='bg-green-800 text-white'>
                <tr>
                  <th className='py-2'>Site</th>
                  <th className='py-2'>Username</th>
                  <th className='py-2'>Password</th>
                  <th className='py-2'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-green-100'>
                {PasswordArray.map((item, index) => {
                  return <tr key={item.id}>
                    <td className='py-2 border border-white text-center max-w-[200px] truncate'>
                      <div className='flex items-center justify-center gap-2'>
                        <a className='truncate max-w-[150px]' href={item.site} target='_blank' rel="noopener noreferrer">
                          {item.site}
                        </a>
                        <div className='cursor-pointer' onClick={() => copyText(item.site)}>
                          <lord-icon
                            style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className='py-2 border border-white text-center'>
                      <div className='flex item-center justify-center'>
                        <span>{item.username}</span>
                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover">
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className='py-2 border border-white text-center'>
                      <div className='flex item-center justify-center'>
                        <span>{"*".repeat(item.password.length)}</span>
                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover">
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className='py-2 border border-white text-center'>
                      <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                          style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>
                      </span>
                      <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>
                      </span>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>}
        </div>
      </div>
    </>
  );
}

export default Manager;
