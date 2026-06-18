import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      name: "Women's Dress",
      price: 999,
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240615/U5B3/666d10f61d763220fabcb0a9/-473Wx593H-700089169-black-MODEL.jpg",
    },
    {
      id: 2,
      name: "Men's Shirt",
      price: 799,
      image:
        "https://www.beyours.in/cdn/shop/files/german-grey-flatlay.jpg?v=1766748028",
    },
    {
      id: 3,
      name: "Stylish Shoes",
      price: 1499,
      image:
        "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/n/s/l/-original-imahgyby4yzbdrxk.jpeg?q=90",
    },
  ];

  const styles = {
    section: {
      padding: "40px",
      backgroundColor: "#f5f5f5",
    },
    heading: {
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "2rem",
    },
    products: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
    },
    card: {
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "0.3s",
    },
    image: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
    },
    content: {
      padding: "15px",
      textAlign: "center",
    },
    title: {
      fontSize: "1.1rem",
      marginBottom: "10px",
    },
    price: {
      color: "#e63946",
      fontWeight: "bold",
      fontSize: "1.2rem",
      marginBottom: "15px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#2874f0",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1rem",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Featured Products</h2>

      <div style={styles.products}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <div style={styles.content}>
              <h3 style={styles.title}>{product.name}</h3>
              <p style={styles.price}>₹{product.price}</p>
              <button style={styles.button}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;