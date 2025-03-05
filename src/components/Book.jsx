import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, bookId } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-6">
        <figure className="bg-gray-100 py-8 rounded-lg">
          <img src={image} alt={bookName} className="h-[166px] rounded-sm" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag, idx) => (
              <button key={idx} className="btn btn-xs btn-accent text-green-200 font-bold">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-11" className="rating-hidden" />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                aria-label="0.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-green-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                aria-label="1.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-green-500"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                aria-label="2.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-green-500"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                aria-label="3.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-green-500"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                aria-label="4.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-green-500"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
