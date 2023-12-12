import "./Category.css";
import CategoryItem from "./CategoryItem";

export default function Category() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul className="category-list">
         <CategoryItem/>
         <CategoryItem/>
         <CategoryItem/>
         <CategoryItem/>
         <CategoryItem/>
         <CategoryItem/>
        </ul>
      </div>
    </section>
  );
}
