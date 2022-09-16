import React,{useState,createContext} from 'react';


export const AllDataContext = createContext({});
export const ChangeAllDataContext = createContext();

//{name:'',pw:'',publickey,privatekey,address}
export function ContextProvider(props){

    //allData:{data,negative,positiv}
    const [allData,setAllData] = useState({})

    console.dir(allData)


    function setAllDataFunc(data){
        setAllData(data)
    }

    return <AllDataContext.Provider value={allData}>
                <ChangeAllDataContext.Provider value={setAllDataFunc}>
                    {props.children}
                </ChangeAllDataContext.Provider>
            </AllDataContext.Provider>


}