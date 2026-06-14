import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export function Add() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [arr, setArr] = useState([]);

  async function submit() {
    await supabase.from("products").insert({
      name: name,
      description: description,
      price: price,
      imageurl: imageurl,
    });
    setName("");
    setDescription("");
    setPrice("");
    setImageurl("");
    fetchData();
  }

  async function fetchData() {
    const { data } = await supabase.from("products").select("*");
    setArr(data);
  }

  async function deleteData(id) {
    await supabase.from("products").delete().eq("id", id);
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Add Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Image URL"
        value={imageurl}
        onChange={(e) => setImageurl(e.target.value)}
      />

      <br />
      <br />

      <button onClick={submit}>
        Add Product
      </button>

      <hr />

      {arr.map((p) => (
        <div key={p.id}>
          <img
            src={p.imageurl}
            alt={p.name}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}
          />

          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <h4>₹{p.price}</h4>

          <button
            onClick={() => deleteData(p.id)}
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </>
  );
}