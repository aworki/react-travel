import React,{FC} from 'react'
import { RouteComponentProps, useParams } from "react-router-dom";

interface MatchParams{
  touristRouteId:string,

}

// export const DetailPage:FC<RouteComponentProps<MatchParams>> = (props)=> {
//   const {history,match,location} = props;
//   // const parssam = useParams();
//   console.log(history);
//   console.log(match.params);
//   console.log(location);
//   // console.log(parssam);
//   return (
//     <div>
//       <h1>这里是，{match.params.touristRouteId}</h1>
//     </div>
//   )
// }


export const DetailPage = ()=> {
  const parssam:MatchParams = useParams();
  console.log(parssam);
  return (
    <div>
      <h1>这里是，{parssam.touristRouteId}</h1>
    </div>
  )
}
