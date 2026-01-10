import useDocumentTitle from "../../hooks/useDocumentTitle";

const Admin = () => {
  useDocumentTitle("Food Delivery - Admin");
  return (
    <div className="bg-secondary/30 py-8 px-5">
      <h1 className="text-gray-600 text-3xl font-semibold">
        Welcome back Admin!
      </h1>
    </div>
  );
};

export default Admin;
