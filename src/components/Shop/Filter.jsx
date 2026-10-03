import { useEffect, useRef, useState } from "react";
import "../../styles/Filter.css";

const INITIAL_FILTERS = { brand: "", minimumPrice: "", maximumPrice: "" };

function Filter({ brands, onFiltersChange }) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [isOpen, setIsOpen] = useState(false);
  const filterButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const filterTrigger = filterButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function closeOnEscape(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      filterTrigger?.focus();
    };
  }, [isOpen]);

  function updateFilter(name, value) {
    const nextFilters = { ...filters, [name]: value };
    setFilters(nextFilters);
    onFiltersChange(nextFilters);
  }

  function clearFilters() {
    setFilters(INITIAL_FILTERS);
    onFiltersChange(INITIAL_FILTERS);
  }

  return (
    <>
      <div className={`shop-drawer${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
        <button
          className="shop-drawer__backdrop"
          type="button"
          aria-label="Close filters"
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(false)}
        />
        <aside id="shop-filter-panel" className="shop-filters" aria-label="Filter fragrances">
          <div className="shop-filters__heading">
            <h2>Filter by</h2>
            <div className="shop-filters__heading-actions">
              <button className="shop-filters__clear" type="button" onClick={clearFilters}>
                Clear
              </button>
              <button
                ref={closeButtonRef}
                className="shop-filters__close"
                type="button"
                aria-label="Close filters"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>
          </div>

          <label className="shop-filter" htmlFor="brand-filter">
            <span>Brand</span>
            <select
              id="brand-filter"
              value={filters.brand}
              onChange={(event) => updateFilter("brand", event.target.value)}
            >
              <option value="">All brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </label>

          <fieldset className="shop-filter shop-filter--price">
            <legend>Price (USD)</legend>
            <div className="shop-price-inputs">
              <label>
                <span className="visually-hidden">Minimum price</span>
                <span aria-hidden="true">$</span>
                <input
                  type="number"
                  min="25"
                  max="500"
                  placeholder="Min"
                  value={filters.minimumPrice}
                  onChange={(event) => updateFilter("minimumPrice", event.target.value)}
                />
              </label>
              <span aria-hidden="true">–</span>
              <label>
                <span className="visually-hidden">Maximum price</span>
                <span aria-hidden="true">$</span>
                <input
                  type="number"
                  min="25"
                  max="500"
                  placeholder="Max"
                  value={filters.maximumPrice}
                  onChange={(event) => updateFilter("maximumPrice", event.target.value)}
                />
              </label>
            </div>
          </fieldset>
        </aside>
      </div>
      <button
        ref={filterButtonRef}
        className="shop-filter-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="shop-filter-panel"
        onClick={() => setIsOpen(true)}
      >
        Filter <span aria-hidden="true">+</span>
      </button>
    </>
  );
}

export default Filter;
