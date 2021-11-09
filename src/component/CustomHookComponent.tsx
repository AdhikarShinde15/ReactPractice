import { useEffect, useMemo, useState } from "react"

export interface Beverage {
    name: string;
    producerName: string;
    beverageName: string;
    beverageColor: string;
    beverageStyle: string;
    producerLocation: string;
    abv: number;
    ibu: number;
    logo: string;
    level: number;
}

function useFetchData<Payload>(url: string): {
    data: Payload[] | null;
    done: boolean;
} {
    const [data, setData] = useState<Payload[] | null>(null)
    const [done, setDone] = useState(false)
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((d: Payload[]) => {
                setData(d);
                setDone(true);
            })
    }, [url]);

    return {
        data,
        done
    }
}
const CustomHookComponent = () => {
    const { data, done } = useFetchData<Beverage>("/hv-taplist.json");
    const portlandTaps = useMemo(() => 
    (data || []).filter(bev => bev.producerLocation.includes("Portland")),
    [data]
    )
    return (
        <div>
           <div>
           {
                done && <img
                src={data![0].logo}
                alt="Beverage Logo"
                />
            }
           </div>
           <div>
               {
                   portlandTaps.length && (
                       <img
                       src={portlandTaps![0].logo}
                       />
                   )
               }
           </div>
          
        </div>
    )
}

export default CustomHookComponent
