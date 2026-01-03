import React from 'react'
// Example With Props //
const Usercard = (props) => {
  return (
    <div style={styles.card}>
         <h2>{props.name}</h2>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Location:</strong> {props.location}</p>
      
    </div>
  )
}
const styles = {
  card: {
    width: "250px",
    padding: "15px",
    border: "2px solid #ccc",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
};

export default Usercard
