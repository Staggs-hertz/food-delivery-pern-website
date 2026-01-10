import { useState } from "react";
import { assets } from "../../assets/admin_assets/assets";
import BlackButton from "../../components/BlackButton";
import InputBox from "../../components/InputBox";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import axios from "axios";
import AddCategoriesOptions from "./AddCategoriesOptions";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  useDocumentTitle("Food Delivery - Admin");

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category_id: "1",
  });

  const [image, setImage] = useState(false);

  const onChangeHandler = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category_id", Number(data.category_id));
    formData.append("image_url", image);

    try {
      await axios.post(
        `${url}/api/products/create`,
        formData
        // { withCredentials: true } // sends cookie
      );

      toast.success("Product created successfully");
      setData({
        name: "",
        description: "",
        price: "",
        category_id: "1",
      });
      setImage(false);
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to create product");
    }
  };

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-12.5 text-gray-600 text-lg">
      <form className="flex flex-col gap-5" onSubmit={onSubmitHandler}>
        {/* image upload  */}
        <div className="flex flex-col gap-2.5">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-30 cursor-pointer"
            />
          </label>
          <input
            type="file"
            id="image"
            name="image_url"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
            required
          />
        </div>

        {/* add product name */}
        <div className="w-[max(50%,280px)] flex flex-col gap-2.5">
          <p>Product name</p>
          <InputBox
            type="text"
            name="name"
            placeholder="Type here"
            onChange={onChangeHandler}
            value={data.name}
          />
        </div>

        {/* add product description */}
        <div className="w-[max(50%,280px)] flex flex-col gap-2.5">
          <p>Product description</p>
          <textarea
            className="rounded p-2.5 border border-[#c9c9c9] w-full"
            name="description"
            value={data.description}
            rows={6}
            onChange={onChangeHandler}
            placeholder="Describe food..."
          ></textarea>
        </div>

        {/* add category price */}
        <div className="flex gap-7.5">
          <div>
            <p className="mb-1">Product category</p>
            <AddCategoriesOptions
              onChange={onChangeHandler}
              value={data.category_id}
            />
          </div>
          <div>
            <p className="mb-1">Product price</p>
            <InputBox
              type="number"
              name="price"
              placeholder="$20"
              onChange={onChangeHandler}
              value={data.price}
            />
          </div>
        </div>

        <BlackButton content="ADD" type="submit" />
      </form>
    </div>
  );
};

export default Add;
