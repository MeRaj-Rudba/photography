import React, { useRef, useState } from "react";
import Image from "next/image";
import validator from "validator";
import SuccessModal from "./Modals/SuccessModal";
import LoadingModal from "./Modals/LoadingModal";
import ErrorModal from "./Modals/ErrorModal";
import axios from "axios";
export default function Form() {
  const host = process.env.NEXT_PUBLIC_API_HOST;
  const cloudinary_url = process.env.NEXT_PUBLIC_CLOUDINARY;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const catRef = useRef(null);
  const [cat, setCat] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [device, setDevice] = useState("iPhone 13");
  const [location, setLocation] = useState("");
  const [photographer, setPhotographer] = useState("MeRaj Rudba");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");

  const clearForm = () => {
    setTitle("");
    setDate("");
    setImage("");
    setDevice("iPhone 13");
    setLocation("");
    setPhotographer("MeRaj Rudba");
    setCategories([]);
    setDescription("");
  };
  const [errors, setErrors] = useState({
    title: "",
    date: "",
    device: "",
    image: "",
    location: "",
    photographer: "",
    categories: "",
    description: "",
  });

  const handleImage = async (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    console.log("Precessing...");
    setLoading(true);

    setErrors({
      title: "",
      date: "",
      device: "",
      image: "",
      location: "",
      photographer: "",

      categories: "",
      description: "",
    });

    let hasError = false;
    if (validator.isEmpty(title)) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        title: "Title can not be empty.",
      }));
      setLoading(false);
    }
    if (!image) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        image: "You must select a photograph.",
      }));
      setLoading(false);
    }
    if (!validator.isDate(date)) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        date: "Date can not be empty",
      }));
      setLoading(false);
    }
    if (validator.isEmpty(location)) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        location: "Location can not be empty",
      }));
      setLoading(false);
    }
    if (validator.isEmpty(device)) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        device: "Device can not be empty",
      }));
      setLoading(false);
    }
    if (validator.isEmpty(photographer)) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        photographer: "Photographer can not be empty",
      }));
      setLoading(false);
    }
    if (!validator.isLength(description, { min: 6 })) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        description: "Description must be 6 character long.",
      }));
      setLoading(false);
    }

    if (!hasError) {
      const formDataImage = new FormData();

      formDataImage.append("file", image);
      formDataImage.append("upload_preset", "rudba-photography");
      // upload image logic here

      axios
        .post(cloudinary_url, formDataImage)
        // .then((r) => r.json())
        .then((res) => {
          console.log(JSON.stringify(res.data));

          const newPhoto = {
            title: title,
            date: date,
            image: res.data,
            device: device,
            location: location,
            photographer: photographer,
            categories: categories,
            description: description,
          };

          axios
            .post(`${host}/create`, newPhoto)
            // .then((response) => response.json())
            .then((data) => {
              console.log(data);
              console.log("Success:", data);

              clearForm();
              setLoading(false);
              setShowModal(true);
            })
            .catch(function (error) {
              console.log(error);
            });
        })

        .catch((err) => {
          console.log(err);
          setErrorModal(true);
          console.log("Error...");
        });
      // upload image logic here
    } else {
      return;
    }
  };
  const handleAddCategory = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        setCategories((oldArray) => [...oldArray, e.target.value]);
        // setPhoto((prevState) => ({
        //   categories: [e.target.value, ...prevState.categories],
        // }));

        // catRef.current.value = "";
        setCat("");
      } else {
        return;
      }
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto ">
      <div className="bg-zinc-50  dark:bg-zinc-900  shadow-2xl shadow-black rounded px-8 pt-6 pb-8 my-10 ">
        {showModal ? (
          <>
            <SuccessModal setShowModal={setShowModal} />
          </>
        ) : null}
        {loading ? (
          <>
            <LoadingModal setShowModal={setLoading} />
          </>
        ) : null}
        {errorModal ? (
          <>
            <ErrorModal setShowModal={setErrorModal} />
          </>
        ) : null}
        <div className="mb-4">
          <label
            className="block  text-slate-700 dark:text-slate-50 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.title ? "border-red-500" : ""
            } rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            name="title"
          />
          <p className="text-red-500 text-xs italic">{errors.title}</p>
        </div>

        <div className="mb-4">
          <label
            className="block  text-slate-700 dark:text-slate-50 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.date ? "border-red-500" : ""
            } rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            placeholder="Date"
          />
          <p className="text-red-500 text-xs italic">{errors.date}</p>
        </div>

        <div className="mb-4">
          <label
            className="block  text-slate-700 dark:text-slate-50 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Image
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.image ? "border-red-500" : ""
            } rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="date"
            // value={image}
            onChange={handleImage}
            type="file"
            name="image"
            accept="image/*"
            placeholder="Image"
          />
          <p className="text-red-500 text-xs italic">{errors.image}</p>
          {image && (
            <div className="my-5">
              <Image
                alt="Point of View."
                src={URL.createObjectURL(image)}
                width={200}
                height={200}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block  text-slate-700 dark:text-slate-50 text-sm font-bold mb-2"
            htmlFor="device"
          >
            Device
          </label>
          <div className="relative">
            <select
              className={`block appearance-none w-full  border ${
                errors.device ? "border-red-500" : ""
              } border-gray-200 text-gray-700 dark:text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline`}
              id="grid-state"
              value={device}
              name="device"
              onChange={(e) => setDevice(e.target.value)}
            >
              <option value="iPhone 13">iPhone 13</option>
              <option value="Canon m50 mark II">Canon m50 mark II</option>
              <option value="Redmi Note 8">Redmi Note 8</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <p className="text-red-500 text-xs italic">{errors.device}</p>
        </div>

        <div className="mb-4">
          <label
            className="block  text-slate-700 dark:text-slate-50 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.location ? "border-red-500" : ""
            } rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="location"
            type="text"
            value={location}
            name="location"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
          <p className="text-red-500 text-xs italic">{errors.location}</p>
        </div>

        <div className="mb-4">
          <label
            className="block  text-slate-700 pink-500dark:text-slate-50 text-sm font-bold mb-2"
            htmlFor="capturedBy"
          >
            Photographer
          </label>
          <div className="relative">
            <select
              className={`block appearance-none w-full  border ${
                errors.photographer ? "border-red-500" : ""
              } border-gray-200 text-gray-700 dark:text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline`}
              id="grid-state"
              value={photographer}
              name="photographer"
              onChange={(e) => setPhotographer(e.target.value)}
            >
              <option value="MeRaj Rudba">MeRaj Rudba</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <p className="text-red-500 text-xs italic">{errors.photographer}</p>
        </div>

        <div className="mb-4">
          <label
            className="block  text-slate-700 dark:text-slate-50 text-sm font-bold mb-2"
            htmlFor="categories"
          >
            Categories
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.categories ? "border-red-500" : ""
            } rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="categories"
            type="text"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            placeholder="Categories"
            onKeyDown={handleAddCategory}
          />
          <p className="text-red-500 text-xs italic">{errors.categories}</p>
        </div>

        <div className="mb-4 ">
          {categories.map((category, idx) => (
            <span
              key={idx}
              className="bg-zinc-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-zinc-700 dark:text-zinc-50 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              {category}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <label
            className="block  text-slate-700 dark:text-slate-50 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>

          <textarea
            className={`shadow appearance-none border ${
              errors.description ? "border-red-500" : ""
            } rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="description"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows={5}
          />
          <p className="text-red-500 text-xs italic">{errors.description}</p>
        </div>

        {/* end of form */}
        <div className="flex items-center justify-between">
          <button
            className="text-white bg-gradient-to-br from-pink-700 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="button"
            onClick={handleSubmit}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
