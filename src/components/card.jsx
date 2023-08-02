import { useContext } from "react";
import { DataContext } from "../context/context";
import "./card.css"

export const BookCard = ({item}) => {
    const {state, dispatch} = useContext(DataContext)
    

    
      

    const updateReadingStatus = (bookName, readingStatus) => {
        console.log(readingStatus);
      
        const updatedData = state.filteredData.map((book) =>
          book.bookName === bookName
            ? readingStatus === "alreadyRead"
              ? { ...book, alreadyRead: true, currentlyReading: false, wantToRead: false }
              : readingStatus === "currentlyReading"
              ? { ...book, alreadyRead: false, currentlyReading: true, wantToRead: false }
              : readingStatus === "wantToRead"
              ? { ...book, alreadyRead: false, currentlyReading: false, wantToRead: true }
              : { ...book }
            : { ...book }
        );
      console.log(updatedData)
      
        dispatch({type: "UPDATE", payload: updatedData})
      };
      
      
      
      
      
      
      
  
    return(
        <div>

         <div className="book-card">
            <div className="imageContainer">
            <img src={item.image} alt="" className="book-image" />
            <div className="dropdown-button">
        
        <div className="dropdown-arrow" >
        <select
               
               onChange={(e) => updateReadingStatus(item.bookName, e.target.value)}
             ><option disabled  >Move to..</option>
                <option value="none">None</option>
               <option value="currentlyReading">{item.currentlyReading ? "✓" : " "}Currently Reading</option>
               <option value="alreadyRead">{item.alreadyRead ? "✓" : " "}Already Read</option>
               <option value="wantToRead">{item.wantToRead ? "✓" : " "}Want To Read</option>
               
             </select>
        </div>
      </div>

            </div>
      
      <div className="book-info">
        <p className="book-title">{item.bookName}</p>
        <p className="publisher">{item.publisher}</p>
      </div>
     
    </div>
           
       
                     </div>
    )
}