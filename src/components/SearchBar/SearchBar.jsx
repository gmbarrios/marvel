import styles from "./searchbar.module.css";
export const SearchBar = () => {
    return (
        <header>
            <div>
                 <div className={styles.searchBox}>
                     <div className={styles.logo}></div>
                      <input className={styles.searchInput} type="search" placeholder="Buscar" /*class=""search-input*/ />
                  </div>
            </div>
        </header>
    );
  };
