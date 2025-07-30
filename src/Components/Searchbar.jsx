import { useGlobalContext } from "../Context/GlobalContext"

export default function Searchbar(){
    const {debounceInput} = useGlobalContext()
    return(
        <>
            <div className="col-md-4">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    name="search"
                    id="search"
                    placeholder="Cerca viaggi..."
                    onChange={(e) => debounceInput(e.target.value)}
                    style={{
                    borderColor: "#0077B6",
                    boxShadow: "none",
                    transition: "box-shadow 0.3s ease",
                    }}
                    onFocus={e => e.target.style.boxShadow = "0 0 10px rgb(188, 179, 79)"}
                    onBlur={e => e.target.style.boxShadow = "none"}
                />
        </div>
        </>
    )
}