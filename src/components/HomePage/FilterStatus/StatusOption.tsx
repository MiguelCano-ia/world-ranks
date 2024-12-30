
interface Props {
  option: string,
  isSelected: boolean,
  onClick: () => void,
}

export const StatusOption = ({ option, isSelected, onClick }: Props) => {

  const styleSelected = "bg-primary rounded-[4px]";
  const styleNotSelected = "bg-secondary-900 border-2 border-secondary-300 rounded-[4px] w-6 h-6";
  const imgElemnt = <img src="../../public/svg/Done_round.svg" alt="done-round" />

  return (
    <div className="flex items-center gap-2">
      <div
        key={ option }
        onClick={ onClick }
        className={ isSelected ? styleSelected : styleNotSelected }
      > 
        { isSelected && imgElemnt}
      </div>
      <div className="font-sans text-secondary-100 text-body font-semibold">{ option }</div>
    </div>
  )
}