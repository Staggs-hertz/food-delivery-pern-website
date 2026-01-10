import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { toast } from "react-toastify";

const List = ({ url }) => {
  useDocumentTitle("Food Delivery - Admin");

  const [list, setList] = useState([]);

  const fetchList = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/api/products/`);
      // console.log(response.data);

      if (response.data.success) {
        setList(response.data.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to get food items");
    }
  }, [url]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const removeFood = async (foodId) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this food item?"
      );

      if (!confirmed) return;

      const response = await axios.delete(`${url}/api/products/${foodId}`);
      await fetchList();

      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to delete food item");
    }
  };

  return (
    <div className="w-[90%] ml-[max(4vw,25px)] max-sm:grid-cols-[1fr_3fr_1fr] max-sm:gap-4 mt-12.5 text-gray-600 text-lg flex flex-col gap-2.5">
      <h2 className="text-xl">All Food List</h2>

      {/* List table */}
      <div>
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] max-sm:grid-cols-[1fr_3fr_1fr] max-sm:gap-4 items-center gap-2.5 py-3 px-3.5 border border-gray-300 text-sm bg-secondary/10 max-sm:hidden">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 py-3 px-3.5 border border-gray-300 text-sm"
            >
              <img src={url + item.image_url} className="w-12.5" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p
                onClick={() => removeFood(item.id)}
                className="cursor-pointer ml-3"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
