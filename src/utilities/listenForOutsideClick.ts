export function listenForOutsideClicks( 
  listening: boolean, 
  setListening: React.Dispatch<React.SetStateAction<boolean>>, 
  menuRef: React.MutableRefObject<HTMLDivElement | null>, 
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
) {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach(( type ) => {
      document.addEventListener(`click`, (evt) => {
        if (menuRef.current && menuRef.current.contains(evt.target as Node)) return;
        setIsOpen(false);
      });
    });
  }
}