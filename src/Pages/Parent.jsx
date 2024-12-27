import { useState } from "react";
import { Child } from "./Child";

// export function Parent() {
//   function handleChildData(data) {
//     console.log(data);
//   }

//   return <Child ParentDataHandle={handleChildData} />;
// }

export function Parent() {
  const [formData, setFormdata] = useState({
    Name: "",
    Age: "",
    Email: "",
    Gender: "",
    Designation: "",
    Skills: [],
  });

  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            // onChange={handleChange}
          />
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              // checked={formData.gender === "male"}
              // onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              // checked={formData.gender === "female"}
              // onChange={handleChange}
            />
            Female
          </label>
        </div>

        <div>
          <label>Designation:</label>
          <select
            name="designation"
            value={formData.designation}
            // onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Skills:</label>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="html"
              // checked={formData.skills.includes("html")}
              // onChange={handleChange}
            />
            HTML
          </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="css"
              // checked={formData.skills.includes("css")}
              // onChange={handleChange}
            />
            CSS
          </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="javascript"
              // checked={formData.skills.includes("javascript")}
              // onChange={handleChange}
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="react"
              // checked={formData.skills.includes("react")}
              // onChange={handleChange}
            />
            React
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
