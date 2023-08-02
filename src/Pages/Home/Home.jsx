import { useContext } from "react"
import { DataContext } from "../../context/context"
import { BookCard } from "../../components/card";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {

    const {state} = useContext(DataContext);
  
    const navigate = useNavigate()

    return (
        <div>
           <div className="currentRead">
            <button onClick={() => navigate("/search")}>Search Books</button>
            <h1>Currently Reading</h1>
            <div className="dataContainer">
            {
                state.filteredData.filter(item => item.currentlyReading === true).map(item => (
                    <div key={item.bookName}>
                        <BookCard item={item}/>
                    </div>
                ))
            }

            </div>
            
           </div>
           <div className="wantRead">
           <h1>Want To Read</h1>
           <div className="dataContainer">
           {
                state.filteredData.filter(item => item.wantToRead === true).map(item => (
                     <div key={item.bookName}>
                        <BookCard item={item}/>
                    </div>
                ))
            }

           </div>
           
           </div>
           <div className="alreadyRead">
           <h1>Already Read</h1>
           <div className="dataContainer">
           {
                state.filteredData.filter(item => item.alreadyRead === true).map(item => (
                     <div key={item.bookName}>
                        <BookCard item={item}/>
                    </div>
                ))
            }

           </div>
           
           </div>

        </div>
    )
}