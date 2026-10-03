import { useMemo, useState } from "react";
import { getProductsFromDataset } from "../../api/productsApi";
import Filter from "./Filter";
import PerfumeCard from "./PerfumeCard";
import PerfumePopup from "./PerfumePopup";
import ShopHeader from "./ShopHeader";
import { filterPerfumes } from "../../helpers/productFilters";
import "../../styles/Shop.css";

const PRODUCTS_PER_PAGE = 20;
const perfumes = getProductsFromDataset();

function Shop() {
  const [filters, setFilters] = useState({
    brand: "",
    minimumPrice: "",
    maximumPrice: "",
  });
  const [page, setPage] = useState(1);
  const [selectedPerfume, setSelectedPerfume] = useState(null);

  const brands = useMemo(
    () => [...new Set(perfumes.map((perfume) => perfume.brand))].sort((a, b) => a.localeCompare(b)),
    [],
  );
  const filteredPerfumes = useMemo(
    () => filterPerfumes(perfumes, filters),
    [filters],
  );

  const pageCount = Math.ceil(filteredPerfumes.length / PRODUCTS_PER_PAGE);
  const currentPage = pageCount === 0 ? 0 : Math.min(page, pageCount);
  const pageStart = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const visiblePerfumes = filteredPerfumes.slice(pageStart, pageStart + PRODUCTS_PER_PAGE);

  function handleFiltersChange(nextFilters) {
    setFilters(nextFilters);
    setPage(1);
  }

  return (
    <main className="shop-page">
      <ShopHeader />

      <div className="shop-layout">
        <section className="shop-results" aria-label="Perfume results">
          <h2 className="shop-results__title">EXPLORE THE COLLECTION</h2>
          <div className="shop-results__summary">
            <Filter brands={brands} onFiltersChange={handleFiltersChange} />
            <p>{filteredPerfumes.length} fragrances</p>
            {currentPage > 0 && <p>Page {currentPage} of {pageCount}</p>}
          </div>

          {visiblePerfumes.length > 0 ? (
            <div className="shop-grid">
              {visiblePerfumes.map((perfume) => (
                <PerfumeCard
                  key={perfume.id}
                  perfume={perfume}
                  onSelect={setSelectedPerfume}
                />
              ))}
            </div>
          ) : (
            <p className="shop-empty">No fragrances match these filters.</p>
          )}

          {pageCount > 1 && (
            <nav className="shop-pagination" aria-label="Perfume pages">
              <button
                type="button"
                onClick={() => setPage(currentPage - 1)}
                disabled={currentPage <= 1}
              >
                Previous
              </button>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  aria-label={`Page ${pageNumber}`}
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPage(currentPage + 1)}
                disabled={currentPage >= pageCount}
              >
                Next
              </button>
            </nav>
          )}
        </section>
      </div>

      <PerfumePopup
        perfume={selectedPerfume}
        onClose={() => setSelectedPerfume(null)}
      />
    </main>
  );
}

export default Shop;
