export const Experience = ({from, to = 'now'}: {[k: string]: string}) => {
  return <>
  <span className="w-1/5 font-semibold mt-1" aria-label={`${from} - ${to}`}>
    {from} - {to}
  </span>
  </>
}