interface Props {
  name: {
    common: string,
    official: string,
  }
}

export const CountryHeader = ({ name }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-sans text-secondary-100 text-heading-lg font-semibold">{ name.common }</h1>
        <p className="font-sans text-secondary-100 text-heading-sm font-medium">{ name.official }</p>
      </div>
    </div>
  )
}
