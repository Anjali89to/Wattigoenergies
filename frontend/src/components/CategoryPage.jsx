import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CategoryPage() {
  const { categorySlug } = useParams(); // e.g. "radiance-solar-kit"
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryLabel = categorySlug
    .split('-')
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(' '); // "radiance-solar-kit" → "Radiance Solar Kit"

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${encodeURIComponent(categoryLabel)}`)
      .then(res => res.json())
      .then(json => json.success && setProducts(json.products))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryLabel]);

  if (loading) return <p>Loading {categoryLabel}...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{categoryLabel}</h1>
      {products.length === 0 ? (
        <p>No products found under {categoryLabel}.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(prod => (
            <div key={prod._id} className="border p-4 shadow">
              <h2 className="font-semibold text-xl">{prod.title}</h2>
              {prod.description && <p className="mt-2">{prod.description}</p>}
              <div className="mt-3 flex flex-wrap gap-2">
                {[prod.image1, prod.image2, prod.image3, prod.image4]
                  .filter(Boolean)
                  .map((url, i) => (
                    <img key={i} src={url} alt={`${prod.title} ${i + 1}`} className="h-24 w-24 object-cover"/>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
