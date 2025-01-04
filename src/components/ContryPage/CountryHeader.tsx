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
        <div className="font-sans text-secondary-100 text-heading-lg font-semibold min-w-screen text-center mb-2">{ name.common }</div>
        <div className="font-sans text-secondary-100 text-heading-sm font-medium">{ name.official }</div>
      </div>
    </div>
  )
}
