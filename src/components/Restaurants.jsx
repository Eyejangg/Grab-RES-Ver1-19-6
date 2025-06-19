import React from 'react'
import { Card } from './Card';

export const Restaurants = () => {
  return (
    <div className='flex'>
    <div className="flex flex-wrap justify-center gap-4 p-4">

      <Card 
      title='Reku Tea'
      type="ชาไข่มุก"
      img="https://food-cms.grab.com/compressed_webp/merchants/3-C33KAN31RY2DFE/hero/ca5420a9-f667-4e60-a17b-2f04fbd05cd6__store_cover__2023__03__25__08__28__32.webp">
      </Card>

      <Card 
      title='SOrder ชากับเธอ Chagubter - เตาปูน'
      type="ชากาแฟ"
      img="https://food-cms.grab.com/compressed_webp/merchants/3-C2NYFCCDEE3VGE/hero/c77ace34288d449c95f8e456698d3581_1658460676354176549.webp">
      </Card>

    </div>
    </div>
  );
};
  


export default Restaurants