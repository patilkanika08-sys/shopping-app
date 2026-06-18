import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const brandOptions = {
  menswear: ["Levis", "Nike", "Puma", "Zara"],
  womenswear: ["H&M", "Forever 21", "Zara"],
  shoes: ["Nike", "Adidas", "Puma"],
  bags: ["Skybags", "American Tourister"],
  watches: ["Titan", "Casio", "Fastrack"]
};

function Addproduct() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setProducts(data);
  };

  const addProduct = async () => {
    if (!name || !brand || !price) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase
      .from("products")
      .insert([
        {
          category: name,
          product_name: name,
          brand: brand,
          price: Number(price)
        }
      ]);

    if (error) {
      console.log(error);
      alert(error.message);
      return;
    }

    alert("Product Added Successfully");

    setName("");
    setBrand("");
    setPrice("");

    fetchProducts();
  };

  const deleteProduct = async (id) => {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    fetchProducts();
  };

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center"
      }}
    >
      <h1>Add Product</h1>

      <select
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setBrand("");
        }}
        style={{
          padding: "10px",
          width: "250px"
        }}
      >
        <option value="">Select Category</option>
        <option value="menswear">Men's Wear</option>
        <option value="womenswear">Women's Wear</option>
        <option value="shoes">Shoes</option>
        <option value="bags">Bags</option>
        <option value="watches">Watches</option>
      </select>

      <br />
      <br />

      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        style={{
          padding: "10px",
          width: "250px"
        }}
      >
        <option value="">Select Brand</option>

        {name &&
          brandOptions[name]?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{
          padding: "10px",
          width: "250px"
        }}
      />

      <br />
      <br />

      <button
        onClick={addProduct}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Add Product
      </button>

      <hr style={{ margin: "30px 0" }} />

      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "300px",
              margin: "10px auto"
            }}
          >
            <h3>{item.product_name}</h3>

            <p>
              <b>Brand:</b> {item.brand}
            </p>

            <p>
              <b>Price:</b> ₹{item.price}
            </p>

            <button
              onClick={() => deleteProduct(item.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Addproduct;