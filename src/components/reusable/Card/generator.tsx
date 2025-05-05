import styles from './styles.module.scss';
import Card from './index';

export interface ICardData {
  title: string,
  isLink: boolean,
  link: string,
  linkTitle: string,
  subHeader: string,
  description: string,
  chips: Array<{title: string, link?: string}>
}

interface IDataMap {
  experience: IExperience;
}

export interface IFlags {
  experience:(data : IDataMap['experience']) =>  ICardData,
}


type TSlots = {
  [K in keyof IFlags]: (initialData: IDataMap[K]) => React.ReactNode;
}
 
const flags: IFlags = {
  experience: ({company, role, location, description, technologies}) => ({
      title: role || '',
      isLink: !!company.link,
      link: company.link || '#',
      linkTitle: company.title || '',
      subHeader: location || '',
      description: description || '',
      chips: technologies || [],
    }
  ),
}

const slots: Partial<TSlots>  = {
  experience: (initialData: IDataMap['experience']) => {
    const {from, to} = initialData.timeline
    return (
      <div className="w-full lg:w-1/5 font-semibold mt-1 shrink-0 text-sm text-center" aria-label={`${from} - ${to}`}>
        <div className="hidden lg:block">
          <p>{to}</p>
          <p className="font-[700] text-3xl hidden lg:block">&#8593;</p>
          {/*<p className="font-[700] text-3xl block lg:hidden"> - </p>*/}
          <p className="mt-2">{from}</p>
        </div>
        <div className="flex lg:hidden flex-nowrap items-center justify-end">
          <span>{from}</span>
          <span> &nbsp;-&nbsp; </span>
          <span>{to}</span>
        </div>
      </div>
    );
  },
};

const output = (flag: string) => {
  const possibleKeys = Object.keys(flags).join(' ');
  return `flag "${flag}" not found. Did you mean ${possibleKeys}?`
}

export const serializeCard = <K extends keyof typeof flags>(
  flag: K,
  data: Parameters<typeof flags[K]>[0],
) => {
  if(flag in flags) {
    return flags[flag](data)
  }
  throw Error(output(flag));
}

export const serializeCards = <K extends keyof typeof flags>(
  flag: K,
  arr: Array<Parameters<typeof flags[K]>[0]>
): Array<ICardData> => {
  if(flag in flags) {
    return arr.map((rawData) => serializeCard(flag, rawData))
  }
  return [] as ICardData[];
  
}

export const GenerateCard = <K extends keyof typeof flags>({
  flag,
  data,
}: {
  flag: K,
  data: Parameters<typeof flags[K]>[0],
}) => {
  const serializedData = serializeCard(flag, data);
  return <>
    <Card data={serializedData}>
      {
        slots[flag] && slots[flag](data)
      }
    </Card>
  </>
}

export const GenerateCards = <K extends keyof typeof flags>({
  flag,
  arr
}: {
  flag: K,
  arr: Array<Parameters<typeof flags[K]>[0]>
}) => {
  return (
    <div className={styles['card-container']}>
      {
        (arr||[]).map((el, idx) =>  (
          <GenerateCard key={idx} flag={flag} data={el} />
        )
        )
      }
    </div>
  )
}