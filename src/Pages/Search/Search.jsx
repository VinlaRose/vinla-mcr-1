import { useContext, useState} from "react"
import { DataContext } from "../../context/context"
import { BookCard } from "../../components/card";
import "../Home/Home.css"

export const Search = () => {

    const {state,dispatch} = useContext(DataContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(state.filteredData);

    const handleSearchChange = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
    
        if (searchValue.trim() === '') {
          
          dispatch({type: "SEARCH" , payload: state.data})
        } else {
          const filtered = state.data.filter((book) =>
            book.bookName.toLowerCase().includes(searchValue.toLowerCase())
          );
          setFilteredBooks(filtered);
          dispatch({type: "SEARCH" , payload: filteredBooks})
        }
      };
  
    

    return (
        <div>
          
           <div class="input-container">
           <i class="back-arrow">&larr;</i>
          <input
    type="text"
    value={searchTerm}
    onChange={handleSearchChange}
    placeholder="Search for books..."
  />
</div>

           <div className="dataContainer">
           
           
           
            {
                state.searchData.map(item => (
                    <div key={item.bookName}>
                        <BookCard item={item}/>
                    </div>
                ))
            }
           </div>
           
         

        </div>
    )
}