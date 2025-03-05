import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from "../utils/addToDB";
import Book from "./Book";

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);
    }, []);

    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h1 className="text-2xl">Books I Read: {readList.length}</h1>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                <h1 className="text-2xl">My Wishlist</h1>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;