interface Props {
  png: string
}

export const CountryFlag = ( { png }: Props ) => {
  return (
    <div className="relative sm:h-36 h-20">
      <div className="absolute sm:-top-12 -top-6 left-1/2 transform -translate-x-1/2">
        <img src={ png } alt="" className="rounded-lg sm:w-72 sm:h-52 w-64 h-32 object-cover" />
      </div>
    </div>
  )
}
