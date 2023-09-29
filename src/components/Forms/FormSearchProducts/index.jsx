import React from 'react';
import { useSearchParams } from 'react-router-dom';

const FormSearchProducts = ({ submit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');

  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = searchParams.get('search');
    submit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputTodo" className="form-label">
          Search products
        </label>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          className="form-control"
          id="exampleInputTodo"
          value={query}
        />
      </div>
      <button className="btn btn-primary mb-3" type="submit">
        Search
      </button>
    </form>
  );
};

export default FormSearchProducts;
