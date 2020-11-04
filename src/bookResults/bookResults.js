import React from 'react';
import './bookResults.css'
import BookResultsItem from '../bookResultsItem/bookResultsItem';

export default function BookResults( props ) {
    
    const { bookResults } = props;
    const listOfBooks = bookResults.items
                        .map(( book, index ) => <BookResultsItem 
                                                    book={ book } 
                                                    key={ index } />);           
    return (
        <>
        <section className="booklist_container">
            <ul>
                { listOfBooks }
            </ul>
        </section>    
        </>
    );
}
