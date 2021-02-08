import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const initialState = { color: "", width: "", height: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color: {formData.color}</label>
      <input
        onChange={handleChange}
        value={formData.color}
        type="text"
        id="color"
        name="color"
        placeholder="color"
      />
      <label htmlFor="width">Width: {formData.width}</label>
      <input
        onChange={handleChange}
        value={formData.width}
        type="text"
        id="width"
        name="width"
        placeholder="width"
      />
      <label htmlFor="height">Height: {formData.height}</label>
      <input
        onChange={handleChange}
        value={formData.height}
        type="text"
        id="height"
        name="height"
        placeholder="height"
      />
      <button>Submit</button>
    </form>
  );
};

export default NewBoxForm;
