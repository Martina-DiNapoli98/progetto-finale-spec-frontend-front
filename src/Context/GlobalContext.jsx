import { useContext, createContext, useState, useEffect, useMemo, useCallback } from "react";

const GlobalContext = createContext()

export function GlobalProvider({children}){


  /* FETCH TRAVEL */
  const [travel, setTravel] = useState([])
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/trips`);
        if (!res.ok) throw new Error("Errore nella risposta del server");
        const data = await res.json();
        setTravel(data);
        setError(null); 
      } catch (error) {
        console.error("Errore nel fetch", error);
        setError("Errore nel caricamento dei viaggi");
      }
    };
    fetchData();
  }, []);


  /* SEARCHBAR + FILTRO CATEGORIA */

  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState("tutti")
  const [sortOrder, setSortOrder] = useState("default")

    const filteredTravel = useMemo(() => {
        const input = search.toLowerCase();
        const filtered = travel.filter(t => {
        const matchesText = 
            t.title.toLowerCase().includes(input) ||
            t.category.toLowerCase().includes(input) 
            

        const matchesCategory = 
            selected.toLowerCase() === "tutti" ||
            t.category.toLowerCase() === selected.toLowerCase();

        return matchesText && matchesCategory;
        });

        if (sortOrder === "az") {
            return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOrder === "za") {
            return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
        }

        return filtered;
    }, [travel, search, selected, sortOrder]);



      /* DEBOUNCE */
    function debounce(callback, delay) {
              let timer;
              return (value) => {
              clearTimeout(timer);
              timer = setTimeout(() => {
              callback(value);
              }, delay);
          };
      }

    const debounceInput = useCallback(debounce(setSearch, 500), [])

  /* FETCH FOR SINGLE TRAVEL */

const [selectedTrip, setSelectedTrip] = useState(null);

const fetchSingleTrip = async (id) => {
  try {
    const res = await fetch(`http://localhost:3001/trips/${id}`);
    const data = await res.json();
    setSelectedTrip(data);
  } catch (error) {
    console.error("Errore nel fetch del dettaglio", error);
    setSelectedTrip(null);
  }
};



    /* AGGIUNGI AI PREFERITI + LOCAL STORAGE */
    
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
      });

      useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }, [favorites]);

      const addFavorite = (trip) => {
      setFavorites(prev => {
        if (prev.some(t => t.id === trip.id)) return prev;
        return [...prev, trip];
      });
    };
    const removeFavorite = (tripId) => {
      setFavorites(prev => prev.filter(t => t.id !== tripId));
    };


    /* CONFRONTA */
const [compare, setCompare] = useState(() => {
  try {
    const saved = localStorage.getItem("compare");
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Errore parsing compare:", err);
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("compare", JSON.stringify(compare));
}, [compare]);

const addCompare = (trip) => {
  setCompare(prev => {
    if (prev.some(t => t.id === trip.id)) return prev;
    return [...prev, trip];
  });
};

const removeCompare = (tripId) => {
  setCompare(prev => prev.filter(t => t.id !== tripId));
};




    return(
            <GlobalContext.Provider value={{
              travel,
              setTravel,
              filteredTravel,
              search,
              setSearch,
              debounceInput,
              debounce,
              selectedTrip,
               setSelectedTrip,
               selected,
               setSelected,
               fetchSingleTrip,
               sortOrder,
               setSortOrder,
               favorites,
                addFavorite,
                removeFavorite,
                compare,
                addCompare,
                removeCompare,
                error,
                setError
            }}>
                {children}
            </GlobalContext.Provider>      
    )
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}