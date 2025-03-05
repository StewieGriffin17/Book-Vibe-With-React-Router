import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList, addToWishList } from "../utils/addToDB";

const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);

    const { image} = book;

    const handleRead = (id) => {
        addToReadList(id);
    }

    const handleWish = (id) => {
        addToWishList(id);
    }
    return (
        <div className="my-12">
            <h2>Book Details: {bookId}</h2>
            <img className="w-36" src={image} alt="" />
            <br />
            <button className="btn btn-accent btn-outline mr-4" onClick={() => handleRead(id)}>Read</button>
            <button className="btn btn-accent" onClick={() => handleWish(id)}>Wishlist</button>
        </div>
    );
};

export default BookDetails;