'use server'

import Image from "next/image"
import DialogDemo from "./component"
import { getData } from "./actions"

export default async function Home() {

  let data = await getData();

  return (
      <div className="">
          <DialogDemo />
          {
            data.map( ( item ,  ) => 
                <div> { item.title }  </div>
            )
          }
      </div>
  );
}