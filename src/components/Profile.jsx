import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";

function Profile() {
  const [ProfilePic, setProfilePic] = useState("");
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [SelectedPic, setSelectedPic] = useState(false);

  const setProfilePicture = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setSelectedPic(true);
      };
    }
  };
  return (
    <div className="w-full flex-grow mt-3 px-4 flex flex-col gap-10">
      <div className="w-full flex items-center justify-between text-red-400 font-serif">
        <h2 className="text-3xl">Update Your Account</h2>
        <p className="font-bold hover:scale-105 transform duration-150 text-red-500 text-sm cursor-pointer">
          Delete Account
        </p>
      </div>

      <form
        action=""
        className="flex flex-col px-3 items-center gap-8 font-serif"
      >
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xl">Profile Picture</label>
          <div className="flex items-center space-x-3">
            <div className="border cursor-pointer w-24 h-24 rounded-lg bg-gray-200">
              {SelectedPic && (
                <img
                  onClick={() => {
                    setSelectedPic(false);
                  }}
                  src={ProfilePic}
                  alt=""
                  className="w-full h-full rounded-lg object-cover cursor-pointer"
                />
              )}
            </div>
            <div>
              <input
                type="file"
                id="ProfilePic"
                hidden
                onChange={setProfilePicture}
              />
              <label htmlFor="ProfilePic">
                <BiImageAdd
                  className="cursor-pointer"
                  style={{ fontWeight: "bold", color: "red", fontSize: "30px" }}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xl">UserName</label>
          <input
            type="text"
            placeholder="username"
            className="outline-none border-b bg-transparent px-1 py-3 placeholder:text-lg text-lg"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xl">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="outline-none border-b bg-transparent px-1 py-3 placeholder:text-lg text-lg"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xl">Password</label>
          <input
            type="Password"
            placeholder="Password"
            className="outline-none border-b bg-transparent px-1 py-3 placeholder:text-lg text-lg"
          />
        </div>

        <button className="py-3 w-[40%] px-4 rounded-lg text-white ml-10 font-bold bg-green-600 hover:bg-green-500 active:bg-green-400">
          Update
        </button>
      </form>
    </div>
  );
}

export default Profile;