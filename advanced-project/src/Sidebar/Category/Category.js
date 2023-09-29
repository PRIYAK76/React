import "./Category.css";
import Input from "../../components/Input";

function Category({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sdiebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>All
        </label>
        <input onChange={handleChange} type="radio" value="sneakers" name="test"  title="Sneakers"/>

      </div>
    </div>

  )
}

export default Category
