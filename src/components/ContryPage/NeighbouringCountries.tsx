export const NeighbouringCountries = () => {
  return (
    <div className="flex flex-col px-5">
      <p className="font-sans text-secondary-300 font-semibold text-caption mb-5">Neighbouring Countries</p>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png" alt="" className="w-20 h-16 object-cover rounded-md" />
          <p className="font-sans text-secondary-100 font-medium text-caption mt-2">Afghanistan</p>
        </div>
        <div className="flex flex-col">
          <img src="https://flagcdn.com/w320/bd.png" alt="" className="w-20 h-16 object-cover rounded-md" />
          <p className="font-sans text-secondary-100 font-medium text-caption mt-2">Bangladesh</p>
        </div>
      </div>
    </div>
  )
}
